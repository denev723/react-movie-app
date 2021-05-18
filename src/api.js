import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "24e57914be24aef87dfd80b279f9bb90",
    language: "ko-KR",
  },
});

export const movieApi = {
  topRated: () => api.get("/movie/top_rated"),
  nowPlaying: () => api.get("/movie/now_playing"),
};
