import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestination = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destinations"
        subTitle="Discover the best places to stay around the world with our curated selection of featured destinations. From bustling cities to serene beaches, find your perfect getaway."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard room={room} key={room._id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
