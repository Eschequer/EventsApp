import React from "react";
import styles from "./Event.module.css";
import Button from "./ui/Button";
import DateIcon from "./icons/DateIcon";
import AddressIcon from "./icons/AddressIcon";

const Event = ({ title, image, date, location, id }) => {
  const localeDate = new Date(date).toLocaleDateString("en-US");
  const address = location.replace(", ", "\n");

  return (
    <li className={styles.event}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>{title}</h3>
          <div className={styles.date}>
            <DateIcon />
            <time dateTime={localeDate}>{localeDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <Button link={`/events/${id}`}>Explore Event</Button>
      </div>
    </li>
  );
};

export default Event;
