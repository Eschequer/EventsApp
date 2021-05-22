export async function getEvents(url) {
  const response = await fetch(url);

  const data = await response.json();

  return Object.entries(data).map(([id, event]) => {
    return { id, ...event };
  });
}

export async function getEventById(id, url) {
  const events = await getEvents(url);
  return events.find((event) => event.id === id);
}

export async function getFeaturedEvents(url) {
  const events = await getEvents(url);
  return events.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter, url) {
  const { year, month } = dateFilter;

  const events = await getEvents(url);

  return events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
