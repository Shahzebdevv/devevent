"use server";

import { isValidObjectId } from "mongoose";

import Booking from "@/database/booking.model";
import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";

type CreateBookingInput = {
  eventId: string;
  slug: string;
  email: string;
};

type BookingResult = {
  success: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Creates one booking after confirming the submitted event ID and slug match. */
export async function createBooking({
  eventId,
  slug,
  email,
}: CreateBookingInput): Promise<BookingResult> {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedSlug = slug.trim().toLowerCase();

  if (
    !isValidObjectId(eventId) ||
    !normalizedSlug ||
    !EMAIL_PATTERN.test(normalizedEmail)
  ) {
    return { success: false };
  }

  try {
    await connectDB();

    const event = await Event.exists({ _id: eventId, slug: normalizedSlug });
    if (!event) {
      return { success: false };
    }

    await Booking.create({ eventId, email: normalizedEmail });
    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to create booking:", error);
    return { success: false };
  }
}
