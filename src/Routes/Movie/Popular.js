import { movieApi } from "api";
import Loader from "Components/Loader";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Poster from "Components/Poster";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  box-sizing: border-box;
  margin-top: 20px;
`;

function Popular() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movies },
      } = await movieApi.popular();
      setMovies(movies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loader />;
  if (error) return <div>불러오기 중 에러가 발생했습니다.{error}</div>;
  if (!movies) return null;
  return (
    <Container>
      {movies.map((movie) => (
        <Poster
          id={movie.id}
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          year={movie.release_date}
          imageUrl={movie.poster_path}
        />
      ))}
    </Container>
  );
}

export default Popular;
