"use server";

import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";

export type SimilarEvent = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

/** Returns up to three events that share at least one tag with the current event. */
export async function getSimilarEventsBySlug(
  slug: string,
): Promise<SimilarEvent[]> {
  if (!slug.trim()) {
    return [];
  }

  await connectDB();

  const event = await Event.findOne({ slug })
    .select({ tags: 1 })
    .lean();

  if (!event?.tags.length) {
    return [];
  }

  const similarEvents = await Event.find({
    slug: { $ne: slug },
    tags: { $in: event.tags },
  })
    .select({ title: 1, image: 1, slug: 1, location: 1, date: 1, time: 1 })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return similarEvents.map(({ title, image, slug: eventSlug, location, date, time }) => ({
    title,
    image,
    slug: eventSlug,
    location,
    date,
    time,
  }));
}
