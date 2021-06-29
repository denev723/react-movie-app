import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi, tvApi } from "api";
import Loader from "Components/Loader";

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  margin-top: 20px;
`;

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const id = parseInt(params.id);
  if (isNaN(id)) {
    history.push("/");
  }
  const isMovie = location.state.isMovie;
  const fetchData = async (id) => {
    setLoading(true);
    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(id);
        setResult(result);
      } else {
        const { data: result } = await tvApi.tvDetail(id);
        setResult(result);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  console.log(result);

  if (!result) return null;
  if (error) return <div>불러오기 중 에러가 발생했습니다.</div>;
  return result && loading ? (
    <Loader />
  ) : (
    <Container>
      <div></div>
      <div>
        <div>
          <h1>{result.title ? result.title : result.name}</h1>
          <p>평점 : {result.vote_average}</p>
          {result.release_date ? (
            <p>개봉일 : {result.release_date}</p>
          ) : (
            <>
              <p>첫 방영일 : {result.first_air_date}</p>
              <p>최근 방영일 : {result.last_air_date}</p>
            </>
          )}
          <p>
            {result.genres &&
              result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `,
              )}
          </p>
          {result.homepage ? (
            <a href={result.homepage}>
              <p>홈페이지 : {result.homepage}</p>
            </a>
          ) : null}
          <div>
            <p>제작사 : </p>
            {result.production_companies &&
              result.production_companies.map((company) => (
                <div key={company.id}>
                  <p>{company.name}</p>
                </div>
              ))}
          </div>
        </div>
        {result.overview ? <p>{result.overview}</p> : null}
      </div>
    </Container>
  );
};

export default Detail;
