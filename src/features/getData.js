import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=0e017d1cf3aa44c76887c24c592892f0";

export const getPopularData = async (dataName, page = 1) => {
  const { data } = await axios.get(
    `${baseUrl}/${dataName}/popular?${apiKey}&language=en-US&page=${page}`
  );

  return data.results;
};

export const getGenres = async () => {
  const { data } = await axios.get(
    `${baseUrl}/genre/movie/list?${apiKey}&language=en-US`
  );

  return data.genres;
};

export const getPersonById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/person/${id}?${apiKey}`);

  return data;
};

export const getPersonData = async (id) => {
  const { data: infoRequest } = await axios.get(
    `${baseUrl}/person/${id}?${apiKey}`
  );
  const { data: creditsRequest } = await axios.get(
    `${baseUrl}/person/${id}/tv_credits?${apiKey}&language=en-US`
  );

  const [personInfo, personCredits] = await axios.all([
    infoRequest,
    creditsRequest,
  ]);

  return {
    actorInfo: personInfo,
    moviesCast: personCredits.cast,
    moviesCrew: personCredits.crew,
  };
};
