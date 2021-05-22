import React from "react";
import { getFilteredEvents } from "../../api-util";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/ResultsTitle";

const FilteredEvents = ({ filteredEvents, year, month }) => {
  const date = new Date(year, month - 1);

  if (filteredEvents === null)
    return <p className="center">No events found!</p>;

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params } = context;

  console.log(params);

  const filterData = params.slug;

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2021 ||
    year < 2020 ||
    month < 1 ||
    month > 12
  ) {
    return {
      notFound: true,
      /*redirect: {destination: "/error"}*/
    };
  }

  const filteredEvents = await getFilteredEvents(
    {
      year,
      month,
    },
    "https://my-project-1543526494526.firebaseio.com/events.json"
  );

  if (!filteredEvents || filteredEvents.length === 0) {
    return {
      props: {
        filteredEvents: null,
      },
    };
  }

  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}
