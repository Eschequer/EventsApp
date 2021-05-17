import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummyEvents";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/ResultsTitle";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading</p>;
  }

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
    return <p className="center">Invalid Filter! Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return <p className="center">No events found!</p>;

  console.log(filteredEvents);

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
