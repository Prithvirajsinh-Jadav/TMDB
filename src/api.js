import axios from "axios";

export const GetRecommendations = (id, isMovie) => {
  const url = `https://api.themoviedb.org/3/${isMovie}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(url);
};

export const GetCredits = (id, isMovie) => {
  const castURL = `https://api.themoviedb.org/3/${isMovie}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(castURL);
};

export const GetCategoryWatchProvider = (currentWatchCountry) => {
  const categoryWatchProviderURL = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY}&watch_region=${currentWatchCountry}`;
  return axios.get(categoryWatchProviderURL);
};

export const GetDetails = (isMovie, id) => {
  const detailURL = `https://api.themoviedb.org/3/${isMovie}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(detailURL);
};

export const GetReview = (id, isMovie) => {
  const reviewURL = `https://api.themoviedb.org/3/${isMovie}/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(reviewURL);
};

export const GetCategoryData = (isMovie, category, page) => {
  const categoryURL = `https://api.themoviedb.org/3/${isMovie}/${category}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
  return axios.get(categoryURL);
};

export const GetKeywords = (isMovie, id) => {
  const keywordURL = `https://api.themoviedb.org/3/${isMovie}/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(keywordURL);
};

export const GetTrendingData = (isWeek) => {
  const url = `https://api.themoviedb.org/3/trending/all/${isWeek}?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(url);
};

export const GetWatchProvider = (id, isMovie) => {
  const watchProvider = `https://api.themoviedb.org/3/${isMovie}/${id}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`;
  return axios.get(watchProvider);
};

export const GetDiscoverData = (isMovie, url, page) => {
  const categoryURL = `https://api.themoviedb.org/3/discover/${isMovie}?api_key=${process.env.REACT_APP_API_KEY}&${url}&page=${page}`;
  return axios.get(categoryURL);
};

export const GetSearchQueryData = (currentSearchTab, query,page) => {
  const searchQueryUrl = `https://api.themoviedb.org/3/search/${currentSearchTab}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`;
  return axios.get(searchQueryUrl);
};