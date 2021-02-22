import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import getImagesData from '../requests/getImagesData';
import { mockResponse } from './mockResponse';

jest.mock('../requests/getImagesData');
// jest.mock('../components/Results.js', () => {
//   return {
//     __esModule: true,
//     default: () => {
//       return <div className="results"></div>;
//     },
//   };
// });

describe('App', () => {
  afterEach(cleanup);
  xdescribe('on loading, before searching', () => {
    test('renders correctly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('capturing user input', async () => {
      const { getByRole } = render(<App />);
      const input = getByRole('textbox');
      userEvent.type(input, 'sun');
      expect(input).toHaveValue('sun');
    });

    test('calling the getImagesData function with user input', async () => {
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
    beforeEach(() => {
      getImagesData.mockResolvedValue(mockResponse);
    });

    afterEach(cleanup);

    xtest('loading text displays while images load', async () => {
      const { getByText, getByRole } = render(<App />);
      userEvent.click(getByRole('button', { name: /search/i }));
      await waitFor(() => {
        expect(getByText(/loading/i)).toBeInTheDocument();
      });
    });

    xtest('loading text is hidden after app receives response from api', async () => {
      const { queryByText } = render(<App />);
      // getImagesData.mockResolvedValue(mockResponse);
      await waitFor(() => {
        expect(queryByText(/loading/i)).not.toBeInTheDocument();
      });
    });

    test('search results are displayed as images', async () => {
      const { findAllByTestId, getByRole } = render(<App />);
      const input = getByRole('textbox');
      userEvent.type(input, 'moon');
      userEvent.click(getByRole('button', { name: /search/i }));
      await getImagesData.mockResolvedValue(mockResponse);
      const imgs = await findAllByTestId('result-image');
      expect(imgs).toBeInTheDocument();
    });
  });
});
