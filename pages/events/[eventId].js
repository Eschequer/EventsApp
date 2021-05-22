import React from "react";
import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../api-util";
import EventDetail from "../../components/EventDetail";

const EventDetailPage = ({ event }) => {
  if (event === undefined) return <p>Loading...</p>;

  if (event === null) {
    return <h2>No event found!</h2>;
  }

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      {
        <EventDetail
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
          description={event.description}
        />
      }
    </div>
  );
};

export default EventDetailPage;

export async function getStaticPaths() {
  const events = await getFeaturedEvents(
    "https://my-project-1543526494526.firebaseio.com/events.json"
  );

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const eventId = context.params.eventId;

  let event = await getEventById(
    eventId,
    "https://my-project-1543526494526.firebaseio.com/events.json"
  );

  if (!event) event = null;

  return {
    props: { event },
    revalidate: 30,
  };
}
