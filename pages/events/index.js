import React from "react";
import { useRouter } from "next/router";
import { getEvents } from "../../api-util";
import EventList from "../../components/EventList";
import EventsSearch from "../../components/EventsSearch";

const Events = ({ events }) => {
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

export async function getStaticProps() {
  const events = await getEvents(
    "https://my-project-1543526494526.firebaseio.com/events.json"
  );

  return {
    props: { events },
    revalidate: 60,
  };
}
