import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import { render } from '@testing-library/react';

describe('ErrorMessage', () => {
  test('it renders a generic error message', () => {
    const error = {
      response: {
        status: 400,
      },
    };
    const { getByText } = render(<ErrorMessage error={error} />);
    expect(getByText(/Oops, something went wrong/i)).toBeInTheDocument();
    expect(getByText(/Oops, something went wrong/i)).toHaveClass(
      'error-message'
    );
  });

  test('empty search message', () => {
    const error = {
      message: 'empty search',
    };
    const { getByText } = render(<ErrorMessage error={error} />);
    expect(getByText(/Please enter a search term/i)).toBeInTheDocument();
    expect(getByText(/Please enter a search term/i)).toHaveClass(
      'error-message'
    );
  });
});
