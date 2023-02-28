import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=0e017d1cf3aa44c76887c24c592892f0";

export const getPopularData = async (dataName, page = 1) => {
  const { data } = await axios.get(
    `${baseUrl}/${dataName}/popular?${apiKey}&language=en-US&page=${page}`
  );

  return data.results;
};

export const getGenreName = async () => {
  const { data } = await axios.get(
    `${baseUrl}/genre/movie/list?${apiKey}&language=en-US`
  );

  return data.genres;
};
