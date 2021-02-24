import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import getImagesData from '../requests/getImagesData';
import { mockResults } from '../test-helpers/mockResults';

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
  beforeEach(() => {
    render(<App />);
  });

  describe('on loading, before searching', () => {
    test('renders correctly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('captures user input', async () => {
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'sun');
      await waitFor(() => {
        expect(input).toHaveValue('sun');
      });
    });

    test('calls the getImagesData function with user input and image media type when images button clicked', async () => {
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /search images/i });
      userEvent.type(input, 'sun');
      userEvent.click(button);
      await waitFor(() => {
        expect(getImagesData).toHaveBeenCalled();
        expect(getImagesData).toHaveBeenCalledWith('sun', 'image');
      });
    });

    test('calls the getImagesData function with user input and video media type when video button clicked', async () => {
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /search videos/i });
      userEvent.type(input, 'sun');
      userEvent.click(button);
      await waitFor(() => {
        expect(getImagesData).toHaveBeenCalled();
        expect(getImagesData).toHaveBeenCalledWith('sun', 'video');
      });
    });
  });

  describe('with search result', () => {
    test('loading text displays while images load', async () => {
      userEvent.click(screen.getByRole('button', { name: /search images/i }));
      await waitFor(() => {
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
      });
    });

    test('loading text is hidden after app receives response from api', async () => {
      userEvent.click(screen.getByRole('button', { name: /search images/i }));
      getImagesData.mockResolvedValue(mockResults);
      await waitFor(() => {
        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      });
    });
  });
});
