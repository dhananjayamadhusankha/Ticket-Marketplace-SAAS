"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";

function EventCard({ eventId }: { eventId: Id<"events"> }) {
  const { user } = useUser();
  const router = useRouter();
  const event = useQuery(api.events.getEventById, { eventId });
  const getEventAvailability = useQuery(api.events.getEventAvailability, { eventId });

  const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
    eventId,
    userId: (user?.id) ?? "",
  })


  return <div>EventCard</div>;
}

export default EventCard;
