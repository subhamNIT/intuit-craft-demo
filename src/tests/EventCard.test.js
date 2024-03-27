/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EventCard from '../components/EventCard';

describe('EventCard component', () => {
  const event = {
    id: 1,
    event_name: 'Sample Event',
    event_category: 'Sample Category',
    start_time: '2024-03-17T08:00:00',
    end_time: '2024-03-17T10:00:00'
  };

  const isEventConflict = jest.fn(() => false);
  const handleSelectEvent = jest.fn();
  const category = 'all';

  test('renders correctly with given props', () => {
    const { getByText, getByTitle } = render(
      <EventCard
        event={event}
        isEventConflict={isEventConflict}
        handleSelectEvent={handleSelectEvent}
        category={category}
      />
    );

    // Assert that the component renders correctly
    expect(getByText('Sample Event')).toBeInTheDocument();
    expect(getByText('(Sample Category)')).toBeInTheDocument();
    expect(getByTitle('Sample Event')).toBeInTheDocument();
    expect(getByText('8:00 AM - 10:00 AM')).toBeInTheDocument();
  });

  test('calls handleSelectEvent function when SELECT button is clicked', () => {
    const { getByText } = render(
      <EventCard
        event={event}
        isEventConflict={isEventConflict}
        handleSelectEvent={handleSelectEvent}
        category={category}
      />
    );

    // Simulate button click
    fireEvent.click(getByText('SELECT'));

    // Expect the handleSelectEvent function to be called
    expect(handleSelectEvent).toHaveBeenCalled();
    expect(handleSelectEvent).toHaveBeenCalledWith(event);
  });
  test('calls handleSelectEvent function when REMOVE button is clicked', () => {
    const { getByText } = render(
      <EventCard
        event={event}
        handleSelectEvent={handleSelectEvent}
        category= "selected"
      />
    );

//     // Simulate button click
    fireEvent.click(getByText('REMOVE'));

    // Expect the handleSelectEvent function to be called
    expect(handleSelectEvent).toHaveBeenCalled();
  });
});
