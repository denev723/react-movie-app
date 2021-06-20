import { movieApi, tvApi } from "api";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  h1 {
    font-size: 20px;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 960px;
  margin: 0 auto;
  grid-gap: 10px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  input {
    all: unset;
    width: 250px;
    height: 50px;
    font-size: 24px;
    &::placeholder {
      font-size: 24px;
    }
  }
  button {
    display: none;
  }
`;

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setSearchTerm(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.length <= 1) {
      alert("검색어의 길이가 너무 짧습니다.");
      setSearchTerm("");
    }
    try {
      setLoading(true);
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      setMovieResults(movieResults);
      console.log(movieResults);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setTvResults(tvResults);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={searchTerm}
            type="text"
            placeholder="검색어를 입력하세요..."
          />
          <button type="submit">search</button>
        </Form>
      </Container>
      {!movieResults && !tvResults ? null : loading ? (
        <Loader />
      ) : (
        <Container>
          {movieResults && movieResults.length ? (
            <>
              <h1>Movie 검색 결과</h1>
              <ItemContainer>
                {movieResults.map((movie) => (
                  <Poster
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date
                        ? movie.release_date.substring(0, 4)
                        : null
                    }
                    imageUrl={movie.poster_path}
                  />
                ))}
              </ItemContainer>
            </>
          ) : null}
          {tvResults && tvResults.length ? (
            <>
              <h1>TV 검색결과</h1>
              <ItemContainer>
                {tvResults.map((drama) => (
                  <Poster
                    id={drama.id}
                    key={drama.id}
                    title={drama.name}
                    rating={drama.vote_average}
                    year={
                      drama.first_air_date
                        ? drama.first_air_date.substring(0, 4)
                        : null
                    }
                    imageUrl={drama.poster_path}
                  />
                ))}
              </ItemContainer>
            </>
          ) : null}
        </Container>
      )}
    </>
  );
};

export default Search;
