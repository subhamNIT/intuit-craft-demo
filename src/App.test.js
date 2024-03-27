import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './constants/api-mock';

jest.mock('./constants/api-mock', () => [
  { id: 1, name: 'Event 1', event_category: "Athletics", start_time: '2024-03-17T09:00:00', end_time: '2024-03-17T10:00:00' },
  { id: 2, name: 'Event 2', event_category: "Swimming", start_time: '2024-03-17T10:00:00', end_time: '2024-03-17T11:00:00' },
]);

describe('App Component', () => {
  it('renders loader when isLoading is true', () => {
    render(<App />);

    expect(screen.getByText('Please wait while we are loading!!')).toBeInTheDocument();
  });

  // it('renders error page when error occurs', async () => {
  //   jest.mock('./constants/api-mock', () => {
  //     throw new Error('Failed to fetch');
  //   });
  //   // jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error output
  //   // jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch')); // Simulate API call failure

  //   render(<App />);

  //   expect(await screen.findByText('Error occurred!')).toBeInTheDocument();
  // });

  it('renders dashboard when loading and error are false', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 }); // Increased timeout to 5 seconds

    expect(screen.queryByText('Please wait while we are loading!!')).toBeNull();
    expect(screen.queryByText('Error occurred!')).toBeNull();
    expect(screen.getByText('All Events')).toBeInTheDocument();
  });

  it('loads events and renders them in dashboard', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 }); // Increased timeout to 5 seconds
    expect(screen.getByText('(Athletics)')).toBeInTheDocument();
  });

  it('changes theme on theme change', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 }); // Increased timeout to 5 seconds

    const themeSelector = screen.getByLabelText('Select Theme');
    userEvent.selectOptions(themeSelector, 'dark');

    // Ensure the theme is changed
    expect(await screen.findByTestId('theme-dropdown')).toHaveClass('dark');
  });
  
  // it('adds selected event when handleSelectEvent is called', () => {
  //   render(<App />);

  //   // Simulate the loading state by waiting for the loading message to disappear
  //   // You can adjust the timeout as needed based on the loading delay in your component
  //   setTimeout(() => {
  //     fireEvent.click(screen.getByText('All Events')); // Assuming there's a button/text to trigger event selection
  //     fireEvent.click(screen.getByText('Select')); // Assuming there's a button to trigger event selection

  //     expect(screen.getByText('Selected Events')).toBeInTheDocument();
  //     expect(screen.getByText('Event 1')).toBeInTheDocument(); // Assuming 'Event 1' is one of the events
  //   }, 1000); // Adjust the timeout value as needed
  // });

  // it('removes selected event when handleDeselectEvent is called', () => {
  //   render(<App />);

  //   // Simulate the loading state by waiting for the loading message to disappear
  //   // You can adjust the timeout as needed based on the loading delay in your component
  //   setTimeout(() => {
  //     fireEvent.click(screen.getByText('All Events')); // Assuming there's a button/text to trigger event selection
  //     fireEvent.click(screen.getByText('Select Event')); // Assuming there's a button to trigger event selection

  //     expect(screen.getByText('Selected Events')).toBeInTheDocument();
  //     expect(screen.getByText('Event 1')).toBeInTheDocument(); // Assuming 'Event 1' is one of the events

  //     fireEvent.click(screen.getByTestId('deselect-event-button')); // Assuming there's a button to deselect events

  //     expect(screen.queryByText('Event 1')).not.toBeInTheDocument();
  //   }, 1000); // Adjust the timeout value as needed
  // });

});
