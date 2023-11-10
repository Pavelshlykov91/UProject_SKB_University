import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { eventState, Event, EventId } from './type';

export const initialState:eventState = {
  events: [],
  loading: true,
  error: null,
};

export const loadEvents = createAsyncThunk('events/load', () => api.fetchEvents())
export const addEvents = createAsyncThunk('events/add', (event:Event) => api.fetchAddEvents(event))
export const deleteEvent = createAsyncThunk('events/delete', (id: EventId) => api.fetchDeleteEvent(id));

const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(addEvents.fulfilled, (state, action) => {
        state.events.push(action.payload);
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter((event) => event.id !== action.payload.id);
      })
  },
});

export default EventsSlice.reducer;