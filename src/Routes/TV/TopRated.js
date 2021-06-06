import { tvApi } from "api";
import Loader from "Components/Loader";
import React, { useEffect, useState } from "react";

export default function TopRated() {
  const [loading, setLoading] = useState(false);
  const [dramas, setDramas] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {
        data: { results: dramas },
      } = await tvApi.topRated();
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
    <div>
      {dramas.map((drama) => (
        <div key={drama.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${drama.poster_path}`}
            alt=""
          />
          <h3>{drama.name}</h3>
          <p>{drama.first_air_date}</p>
          <p>{drama.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
