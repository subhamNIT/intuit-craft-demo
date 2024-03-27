/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Theme from '../components/Theme';

describe('Theme component', () => {
  test('renders correctly with given props', () => {
    // Mock props
    const handleThemeChange = jest.fn();
    const theme = 'light';

    // Render the component with mock props
    const { getByText, getByLabelText } = render(
      <Theme handleThemeChange={handleThemeChange} theme={theme} />
    );

    // Assert that the component renders correctly
    expect(getByText('Mode:')).toBeInTheDocument();
    expect(getByLabelText('Select Theme')).toBeInTheDocument();
  });

  test('calls handleThemeChange function on theme change', () => {
    // Mock handleThemeChange function
    const handleThemeChange = jest.fn();

    // Render the component with mock props
    const { getByLabelText } = render(
      <Theme handleThemeChange={handleThemeChange} theme="light" />
    );

    // Simulate theme change
    fireEvent.change(getByLabelText('Select Theme'), { target: { value: 'dark' } });

    // Expect the handleThemeChange function to be called
    expect(handleThemeChange).toHaveBeenCalled();
  });
});
