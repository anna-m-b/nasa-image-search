import React from 'react';
import { render } from '@testing-library/react';
import { mockResults } from '../test-helpers/mockResults';
import Results from '../components/Results';

describe('Results', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Results results={mockResults} />)
    expect(asFragment()).toMatchSnapshot();
  })
  test('search results are displayed as images', () => {
    const { getAllByTestId } = render(<Results results={mockResults} />);
    expect(getAllByTestId('result-image')).toHaveLength(5);
  });
});
