import { Event, EventId } from './type';

export const fetchEvents = async (): Promise<Event[]> => {
  console.log(13131313);

  const res = await (await fetch('/api/events')).json();
  console.log(85858858, res);

  return res;
};

export const fetchAddEvents = async (event: Event): Promise<Event> => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  return res.json();
};

export const fetchDeleteEvent = async (id: EventId): Promise<{ id: number }> => {
  const res = await fetch(`/api/events/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
