export type Event = {
  id?: number;
  // course_id: number;
  name: string;
  data: string;
  address: string;
  theme: string;
  time: string;
};

export type EventId = Event['id'];

export type eventState = {
  events: Event[];
  error: string | null;
  loading: boolean;
};
