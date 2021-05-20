import { movieApi } from "api";
import Loader from "Components/Loader";
import React, { useEffect, useState } from "react";

export default function NowPlaying() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {
          data: { results: movies },
        } = await movieApi.nowPlaying();
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <Loader />;
  if (error) return <div>불러오기 중 에러가 발생했습니다.{error}</div>;
  if (!movies) return null;
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}