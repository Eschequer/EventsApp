import React from "react";
import { getAllEvents } from "../dummyEvents";
import EventList from "../components/EventList";

const HomePage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default HomePage;
