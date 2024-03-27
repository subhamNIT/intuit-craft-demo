import React from 'react';
import { render,screen } from '@testing-library/react';
import ErrorPage from '../components/Error';

describe('ErrorPage component', () => {
  it('renders with error message', () => {
    const errorMessage = 'An error occurred!';
    render(<ErrorPage message={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders default error message if message prop is not provided', () => {
    render(<ErrorPage />);
    const defaultErrorMessage = 'An error occurred!';
    const errorElement = screen.getByText(defaultErrorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
