import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders the nasa logo', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText(/nasa logo/i)).toBeInTheDocument();
  });
});
