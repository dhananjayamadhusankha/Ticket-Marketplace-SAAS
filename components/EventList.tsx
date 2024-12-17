"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Spinner from "./Spinner";
import { CalendarDays } from "lucide-react";
import EventCard from "./EventCard";

function EventList() {
  const events = useQuery(api.events.get);
  if (!events)
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner />
      </div>
    );

  const upcomingEvents = events
    .filter((event) => event.eventDate > Date.now())
    .sort((a, b) => a.eventDate - b.eventDate);

  const pastEvents = events
    .filter((event) => event.eventDate <= Date.now())
    .sort((a, b) => b.eventDate - a.eventDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
          <p className="text-gray-600">Discover & book tickets for amazing events.</p>
        </div>

        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-md text-gray-600">
            <CalendarDays className="w-5 h-5" />
            <span className="font-medium">
              {upcomingEvents.length === 0
                ? "No upcoming events"
                : upcomingEvents.length === 1
                ? "1 Upcoming event"
                : `${upcomingEvents.length} Upcoming events`}
            </span>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <EventCard key={event._id} eventId={event._id} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
