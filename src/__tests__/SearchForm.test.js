import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('Search', () => {
  const { asFragment } = render(<SearchForm />);

  test('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
