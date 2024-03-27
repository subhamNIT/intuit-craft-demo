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

  it('renders dashboard when loading and error are false', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 });

    expect(screen.queryByText('Please wait while we are loading!!')).toBeNull();
    expect(screen.queryByText('Error occurred!')).toBeNull();
    expect(screen.getByText('All Events')).toBeInTheDocument();
  });

  it('loads events and renders them in dashboard', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 });
    expect(screen.getByText('(Athletics)')).toBeInTheDocument();
  });

  it('changes theme on theme change', async () => {
    render(<App />);

    await screen.findByText('All Events', {}, { timeout: 5000 });

    const themeSelector = screen.getByLabelText('Select Theme');
    userEvent.selectOptions(themeSelector, 'dark');

    // Ensure the theme is changed
    expect(await screen.findByTestId('theme-dropdown')).toHaveClass('dark');
  });
});
