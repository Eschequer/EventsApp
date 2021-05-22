import React from "react";
import { getEvents } from "../api-util";
import EventList from "../components/EventList";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
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
