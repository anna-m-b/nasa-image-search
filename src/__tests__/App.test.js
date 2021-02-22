import React from 'react';
import { render, waitFor, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import getImagesData from '../requests/getImagesData';
import { mockResults } from './mockResults';

jest.mock('../requests/getImagesData');
jest.mock('../components/Results.js', () => {
  return {
    __esModule: true,
    default: () => {
      return <div className="results"></div>;
    },
  };
});

describe('App', () => {
  afterEach(cleanup);
  describe('on loading, before searching', () => {
    test('renders correctly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('captures user input', async () => {
      const { getByRole } = render(<App />);
      const input = getByRole('textbox');
      userEvent.type(input, 'sun');
      expect(input).toHaveValue('sun');
    });

    test('calls the getImagesData function with user input', async () => {
      const { getByRole } = render(<App />);
      const input = getByRole('textbox');
      const button = getByRole('button', { name: /search/i });
      userEvent.type(input, 'sun');
      userEvent.click(button);
      await waitFor(() => {
        expect(getImagesData).toHaveBeenCalled();
        expect(getImagesData).toHaveBeenCalledWith('sun');
      });
    });
  });

  describe('with search result', () => {
    test('loading text displays while images load', async () => {
      const { getByText, queryByText, getByRole } = render(<App />);
      userEvent.click(getByRole('button', { name: /search/i }))
      await waitFor(() => {
        expect(queryByText(/loading/i)).toBeInTheDocument();
      });
    });

    test('loading text is hidden after app receives response from api', async () => {
      const { queryByText, getByRole } = render(<App />);
      userEvent.click(getByRole('button', { name: /search/i }));
      await getImagesData.mockResolvedValue(mockResults);
      await waitFor(() => {
        expect(queryByText(/loading/i)).not.toBeInTheDocument();
      });
    });
  });
});


// To Do

// check error handling behaviour