import axios from 'axios';

const getImagesData = async (searchInput, pageNumber = 1) => {
  const response = await axios.get(
    `https://images-api.nasa.gov/search?media_type=image&q=${searchInput}&page=${pageNumber}`
  );

  const collection = response.data.collection;

  const getAssets = async () => {
    return Promise.all(collection.items.map((item) => axios.get(item.href)));
  };

  const assetResponses = await getAssets();

  const imgLinks = assetResponses.map((asset) => asset.data);

  const results = collection.items.map((item) => {
    const id = new RegExp(item.data[0].nasa_id);
    const links = imgLinks.find((array) => id.test(array[0]));
    return {
      nasa_id: item.data[0].nasa_id,
      title: item.data[0].title,
      links,
    };
  });

  return results;
};

export default getImagesData;
