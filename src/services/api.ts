import axios from "axios";
import { Image } from "../types";
interface FetchPhotosResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchPhotos = async (
  page: number,
  query: string = "cat"
): Promise<FetchPhotosResponse> => {
  const { data } = await axios.get<FetchPhotosResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        query,
        page,
        per_page: 12,
      },

      headers: {
        Authorization: `Client-ID tl4wxEu3S2hjMwze5uebiKCFw8MabjOdOZMXLDH3jpQ`,
      },
    }
  );
  return data;
};
