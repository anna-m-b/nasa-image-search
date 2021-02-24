import axios from 'axios';

const getImagesData = async (searchInput, mediaType, pageNumber = 1) => {
  if (!searchInput) {
    throw new Error('Please enter a search word');
  }

  const response = await axios.get(
    `https://images-api.nasa.gov/search?media_type=${mediaType}&q=${searchInput}&page=${pageNumber}`
  );

  const collection = response.data.collection;

  const results = collection.items.map((item) => {
    return {
      media_type: item.data[0].media_type,
      nasa_id: item.data[0].nasa_id,
      title: item.data[0].title,
      thumb: item.links[0].href,
    };
  });

  return results;
};

export default getImagesData;

//`https://images-api.nasa.gov/search?media_type=image&q=${searchInput}&page=${pageNumber}`
