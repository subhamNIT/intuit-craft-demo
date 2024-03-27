import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component', () => {
  const events = [
    { id: 1, name: 'Event 1', event_category: "Athletics", start_time: '2024-03-17T09:00:00', end_time: '2024-03-17T10:00:00' },
    { id: 2, name: 'Event 2', event_category: "Athletics",  start_time: '2024-03-17T10:00:00', end_time: '2024-03-17T11:00:00' },
  ];

  const selectedEvents = [
    { id: 3, name: 'Event 1', event_category: "Athletics", start_time: '2024-03-17T09:00:00', end_time: '2024-03-17T10:00:00' },
  ];

  const handleSelectEvent = jest.fn();
  const handleDeselectEvent = jest.fn();
  const theme = 'light';

  it('renders "All Events" section correctly', () => {
    render(
      <Dashboard
        events={events}
        selectedEvents={selectedEvents}
        handleSelectEvent={handleSelectEvent}
        handleDeselectEvent={handleDeselectEvent}
        theme={theme}
      />
    );

    expect(screen.getByText('All Events')).toBeInTheDocument();
  });

  it('renders "Selected Events" section correctly', () => {
    render(
      <Dashboard
        events={events}
        selectedEvents={selectedEvents}
        handleSelectEvent={handleSelectEvent}
        handleDeselectEvent={handleDeselectEvent}
        theme={theme}
      />
    );

    expect(screen.getByText('Selected Events')).toBeInTheDocument();
  });

  it('renders "No Data Found!" message when events array is empty', () => {
    render(
      <Dashboard
        events={[]}
        selectedEvents={selectedEvents}
        handleSelectEvent={handleSelectEvent}
        handleDeselectEvent={handleDeselectEvent}
        theme={theme}
      />
    );

    expect(screen.getByText('No Data Found!')).toBeInTheDocument();
  });
});
