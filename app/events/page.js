"use client";

import EventCard from "@/components/EventCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [events, setEvents] = useState([]);

  const searchParams = useSearchParams();
  const artist = searchParams.get("artist");
  const tag = searchParams.get("tag");

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://qevent-backend.labs.crio.do/events");
      const data = await res.json();
      setEventsData(data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    if (eventsData.length === 0) return;

    let filteredEvents = eventsData;
    if (artist) {
      filteredEvents = filteredEvents.filter(
        (event) => event.artist.toLowerCase() === artist.toLowerCase()
      );
    }
    if (tag) {
      filteredEvents = filteredEvents.filter(
        (event) => event.tags.includes(tag) === true
      );
    }

    setEvents(filteredEvents);
  }, [eventsData, artist, tag]);

  return (
    <div className="h-full">
      <div className="flex flex-wrap items-center justify-around mt-8 mb-32">
        {events.map((event) => (
          <EventCard key={event.id} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
