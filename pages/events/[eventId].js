import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummyEvents";
import EventDetail from "../../components/EventDetail";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <h2>No event found!</h2>;
  }

  return (
    <div>
      <EventDetail
        title={event.title}
        date={event.date}
        location={event.location}
        image={event.image}
        description={event.description}
      />
    </div>
  );
};

export default EventDetailPage;
