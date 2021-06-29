import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 150px;
  height: 230px;
  background-size: cover;
  background-position: center center;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  border-radius: 6px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 1s;
  &:hover {
    opacity: 1;
  }
  h3 {
    font-size: 14px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  p {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

export default function Poster({ id, imageUrl, title, rating, year, isMovie }) {
  return (
    <Link
      to={
        isMovie
          ? { pathname: `/movies/detail/${id}`, state: { isMovie: true } }
          : { pathname: `/tv/detail/${id}`, state: { isMovie: false } }
      }>
      <Container
        key={id}
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w200/${imageUrl}`
            : require("assets/noPosterSmall.png").default
        }>
        <Wrapper>
          <p>{year}</p>
          <p>{rating}</p>
          <h3>{title}</h3>
        </Wrapper>
      </Container>
    </Link>
  );
}
