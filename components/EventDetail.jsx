import React from "react";
import Image from "next/image";
import styles from "./EventDetail.module.css";
import DateIcon from "./icons/DateIcon";
import AddressIcon from "./icons/AddressIcon";

const EventDetail = ({ title, date, location, image, description }) => {
  const localeDate = new Date(date).toLocaleDateString("en-US");
  const address = location.replace(", ", "\n");

  return (
    <div className={styles.eventDetail}>
      <section className={styles.summary}>
        <h1>{title}</h1>
      </section>
      <section className={styles.logistics}>
        <div className={styles.image}>
          <Image src={`/${image}`} alt={title} width="340" height="160" />
          {/* <img src={`/${image}`} alt={title} />*/}
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.icon}>
              <DateIcon />
            </span>
            <span className={styles.content}>
              <time dateTime={localeDate}>{localeDate}</time>
            </span>
          </li>
          <li className={styles.item}>
            <span className={styles.icon}>
              <AddressIcon />
            </span>
            <span className={styles.content}>
              <address>{address}</address>
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.description}>{description}</section>
    </div>
  );
};

export default EventDetail;
