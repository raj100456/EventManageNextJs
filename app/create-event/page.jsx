"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import useTagInput from "@/hooks/useTag";
import TagField from "@/components/TagField";
import { v4 as uuidv4 } from 'uuid'

export default function CreateEvent() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const MAX_TAGS = 5;
    const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/events");
        }
    }, [status, router]);

    const [eventName, setEventName] = useState("");
    const [artist, setArtist] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [notification, setNotification] = useState(null);


    const Notification = ({ message, type }) => {
        const handleClick = () => {
            setNotification(null);
            if (type === 'success') {
                router.push("/events");
            }
        }

        return (
            <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-3  rounded-lg shadow-md flex items-center space-x-2 ${type == 'success' ? 'text-green-800 bg-green-50 border border-green-300' : 'text-red-800 bg-red-50 border border-red-300'}`}>
                <svg className={`w-5 h-5 ${type == 'success' ? 'text-green-500' : 'text-red-500'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="flex-1">{message}</div>
                <button onClick={handleClick} className={`${type == 'success' ? 'text-green-500 hover:text-green-700' : 'text-red-500 hover:text-red-700'}`}>
                    &times;
                </button>
            </div>
        );
    };

    const handleEventCreate = async (e) => {
        e.preventDefault();

        const imageId = Math.floor(Math.random() * 99) + 1;
        const imageUrl = `https://picsum.photos/id/${imageId}/300/200`;

        const timeToConvert = new Date(`1970-01-01T${time}:00`)
        const formattedTime = timeToConvert.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        const eventPayload = {
            id: uuidv4(),
            name: eventName,
            location: location,
            date: date,
            time: formattedTime,
            tags: tags,
            image: imageUrl,
            artist: artist,
            price: price,
            description: description,
        };

        try {
            const res = await fetch("https://qevent-backend.labs.crio.do/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventPayload),
            });

            if (res.status === 201) {
                setNotification({ message: "Event created successfully!", type: 'success' });
            } else {
                setNotification({ message: "Event creation failed!", type: 'error' });
            }
        } catch (error) {
            setNotification({ message: "Error creating event!", type: 'error' });
            console.error("Error creating event:", error);
        }
    };


    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen" >
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite] text-teal-600"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
    }

    return (
        <div className="flex justify-center">
            {notification && <Notification message={notification.message} type={notification.type} />}
            {session ? (
                <div className="p-4 w-2/3">
                    <h1 className="text-3xl font-bold max-sm:text-2xl bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent mb-4">Create a New Event</h1>

                    <form onSubmit={handleEventCreate}>
                        <div className="space-y-12">
                            <div className=" pb-12">

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-5">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Event Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Global Music Fest"
                                                    autoComplete="name"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    value={eventName}
                                                    onChange={(e) => setEventName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-5">
                                        <label htmlFor="artist" className="block text-sm font-medium leading-6 text-gray-900">
                                            Artist
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md">
                                                <input
                                                    id="artist"
                                                    name="artist"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    autoComplete="artist"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    value={artist}
                                                    onChange={(e) => setArtist(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-5">
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Location
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md">
                                                <input
                                                    id="location"
                                                    name="location"
                                                    type="text"
                                                    placeholder="San Francisco, CA"
                                                    autoComplete="location"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                            Date
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md">
                                                <input
                                                    id="date"
                                                    name="date"
                                                    type="date"
                                                    autoComplete="date"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                                            Time
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md">
                                                <input
                                                    id="time"
                                                    name="time"
                                                    type="time"
                                                    autoComplete="time"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                            Price
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-400 sm:max-w-md box-border justify-between">
                                                <span className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm">$</span>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="number"
                                                    placeholder="0.00"
                                                    autoComplete="price"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-1/2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    required
                                                />
                                                <span className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm">USD</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                            Tags
                                        </label>
                                        <div className="mt-2">
                                            <TagField
                                                tags={tags}
                                                addTag={handleAddTag}
                                                removeTag={handleRemoveTag}
                                                maxTags={MAX_TAGS}
                                            />
                                        </div>
                                    </div>



                                    <div className="col-span-full">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={3}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Create
                            </button>
                        </div>
                    </form>

                </div>
            ) : (
                <div className="text-center">Redirecting...</div>
            )}
        </div>
    );
}


