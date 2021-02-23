import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('Search', () => {
  const validProps = {
    searchInput: '',
    onChange: jest.fn(),
    onSearchSubmit: jest.fn()
  }
  
  const { asFragment } = render(<SearchForm {...validProps} />);

  test('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
