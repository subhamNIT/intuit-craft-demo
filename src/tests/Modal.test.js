/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  it('renders modal with correct message', () => {
    const setShowMaxEventAlertMock = jest.fn();
    const modalMessage = 'Test Modal Message';
    const { getByText } = render(
      <Modal setShowMaxEventAlert={setShowMaxEventAlertMock} modalMessage={modalMessage} />
    );

    // Check if the modal message is rendered correctly
    expect(getByText(modalMessage)).toBeInTheDocument();
  });

  it('calls closeModal function when close button is clicked', () => {
    const setShowMaxEventAlertMock = jest.fn();
    const { getByText } = render(
      <Modal setShowMaxEventAlert={setShowMaxEventAlertMock} modalMessage="Test Modal Message" />
    );

    // Simulate click on close button
    fireEvent.click(getByText('×'));

    // Check if setShowMaxEventAlert function is called with false
    expect(setShowMaxEventAlertMock).toHaveBeenCalledWith(false);
  });
});
