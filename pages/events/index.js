import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummyEvents";
import EventList from "../../components/EventList";
import EventsSearch from "../../components/EventsSearch";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  function searchEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;

    router.push(path);
  }

  return (
    <div>
      <EventsSearch searchHandler={searchEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default Events;
