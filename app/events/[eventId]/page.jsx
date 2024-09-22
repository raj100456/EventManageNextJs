"use client";

import EventCard from "@/components/EventCard";
import Tag from "@/components/Tag";
// import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Events = ({ params }) => {
    const [event, setEvent] = useState([]);

    // const searchParams = useSearchParams();
    // const artist = searchParams.get('artist');
    // const tag = searchParams.get('tag');

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch(`https://qevent-backend.labs.crio.do/events/${params.eventId}`);
            const data = await res.json();
            console.log(data)
            setEvent(data);
        };
        fetchEvents();
    }, [])

    return (
        <div className="h-full flex flex-col items-center m-8 gap-2">
            <img src={event.image} alt="" className="w-1/3" />
            <div className="w-2/3">
                <h1 className="text-3xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">{event.name}</h1>
                <p className="text-lg font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">{event.location}</p>
                <p className="text-lg font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">{event.artist}</p>
                <br />
                <br />
                <div className="flex gap-4">{event.tags && event.tags.map((tag, index) => (
                    <Tag text={tag} key={index}></Tag>
                ))}</div>
                <br />
                <p>{event.description}</p>
                <br />
                <div className="flex justify-between">
                    <span className="text-3xl font-bold max-sm:text-3xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">${event.price}</span>
                    <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-sm">Buy Tickets</button>
                </div>
            </div>
        </div>
    );
};

export default Events;
