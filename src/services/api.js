import axios from "axios";

export const fetchPhotos = async (page, query = "cat") => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID tl4wxEu3S2hjMwze5uebiKCFw8MabjOdOZMXLDH3jpQ`,
      },
    }
  );
  return data;
};
