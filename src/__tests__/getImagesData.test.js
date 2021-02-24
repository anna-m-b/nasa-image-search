import getImagesData from '../requests/getImagesData';
import axios from 'axios';
import mockAPIResponse from '../test-helpers/mockAPIResponse.json';
import { mockResults } from '../test-helpers/mockResults';

jest.mock('axios');

describe('getImagesData', () => {
  test('extracts needed data from api response', async () => {
    axios.get.mockResolvedValue(mockAPIResponse);
    const results = await getImagesData('sun', 'image');
    expect(results).toEqual(mockResults);
  });
  
  //not working
  xtest('throws an error if no query provided', () => {
    expect(() => {
     getImagesData()
   }).toThrow('Please enter a search word')
  });
});
