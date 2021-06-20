import { tvApi } from "api";
import Loader from "Components/Loader";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Poster from "Components/Poster";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 960px;
  margin: 0 auto;
  grid-gap: 10px;
  box-sizing: border-box;
  margin-top: 20px;
`;

export default function OnTheAir() {
  const [loading, setLoading] = useState(false);
  const [dramas, setDramas] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {
        data: { results: dramas },
      } = await tvApi.onTheAir();
      setDramas(dramas);
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
  if (!dramas) return null;
  return (
    <Container>
      {dramas.map((drama) => (
        <Poster
          id={drama.id}
          key={drama.id}
          title={drama.name}
          rating={drama.vote_average}
          year={drama.first_air_date.substring(0, 4)}
          imageUrl={drama.poster_path}
        />
      ))}
    </Container>
  );
}
