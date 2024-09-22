import React from "react";
import ArtistCard from "@/components/ArtistCard";

async function Artists() {
  const res = await fetch(' https://qevent-backend.labs.crio.do/artists');
  const artists = await res.json();

  return (
    <div className="h-full">
    <div className="flex flex-wrap items-center justify-around mt-8 mb-32">
      {artists.map((artist, index) => (
        <ArtistCard artistData={artist} key={index}></ArtistCard>
      ))}
    </div>
  </div>
  );
}

export default Artists;
