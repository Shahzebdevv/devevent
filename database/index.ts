// FIXED: Use "default as" syntax to correctly map your default exports
export { default as Booking } from "./booking.model";
export { default as Event } from "./event.model";

// FIXED: Export the corresponding type interface contracts cleanly
export type { IBooking as BookingDocument } from "./booking.model";
export type { IEvent as EventDocument } from "./event.model";
