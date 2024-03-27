/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader component', () => {
    it('renders with the provided message', () => {
        const message = 'Loading...';
        const { getByText } = render(<Loader message={message} />);
        const loadingText = getByText(message);
        expect(loadingText).toBeInTheDocument();
      });
    
      it('renders with fallback message if no message is provided', () => {
        const { getByText } = render(<Loader />);
        const fallbackMessage = getByText('Please wait while we are loading!!');
        expect(fallbackMessage).toBeInTheDocument();
      });
});
