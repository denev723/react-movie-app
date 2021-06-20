import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "24e57914be24aef87dfd80b279f9bb90",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get(`/movie/now_playing`),
  topRated: () => api.get("/movie/top_rated"),
  popular: () => api.get("/movie/popular"),
  upcoming: () => api.get("/movie/upcoming"),
  movieDetail: (id) =>
    api.get(`/movie/${id}`, { params: { append_to_response: "video" } }),
  search: (term) =>
    api.get("search/movie", {
      params: { query: term },
    }),
};

export const tvApi = {
  airingToday: () => api.get("/tv/airing_today"),
  onTheAir: () => api.get("/tv/on_the_air"),
  popular: () => api.get("/tv/popular"),
  topRated: () => api.get("/tv/top_rated"),
  tvDetail: (id) =>
    api.get(`/tv/${id}`, { params: { append_to_response: "video" } }),
  search: (term) =>
    api.get("search/tv", {
      params: { query: term },
    }),
};
