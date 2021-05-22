import React from "react";
import Head from "next/head";
import { getEvents } from "../api-util";
import EventList from "../components/EventList";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Events App - Main Page</title>
        <meta
          name="description"
          content="View and browse through a lot of interesting events"
        />
      </Head>
      <EventList events={props.events} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const events = await getEvents(
    "https://my-project-1543526494526.firebaseio.com/events.json"
  );

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}
