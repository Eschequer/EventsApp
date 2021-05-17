import React from "react";
import Event from "./Event";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.eventList}>
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
