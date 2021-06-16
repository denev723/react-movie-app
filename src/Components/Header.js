import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid #fafafa;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 960px;
  height: 50px;
  margin: 0 auto;
  font-size: 16px;
`;

const ItemWrapper = styled.ul`
  display: flex;
  align-items: flex-end;
`;

const Item = styled.li`
  &:first-child {
    margin-right: 20px;
  }
  padding: 10px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${(props) => (props.current ? "#fafafa" : "#37474f")};
  color: ${(props) => (props.current ? "#000a12" : "#cfd8dc")};
  font-weight: ${(props) => (props.current ? "600" : "400")};
`;

const Title = styled.div`
  font-size: 32px;
  text-transform: uppercase;
`;

const Header = withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <Wrapper>
        <ItemWrapper>
          <Item
            current={
              pathname === "/movies" ||
              pathname === "/movies/top-rated" ||
              pathname === "/movies/popular" ||
              pathname === "/movies/upcoming"
            }>
            <Link to="/movies">Movies</Link>
          </Item>
          <Item
            current={
              pathname === "/tv" ||
              pathname === "/tv/airing-today" ||
              pathname === "/tv/top-rated" ||
              pathname === "/tv/popular"
            }>
            <Link to="/tv">TV</Link>
          </Item>
        </ItemWrapper>
        <Title>Movie App</Title>
        <Link to="/search">Search</Link>
      </Wrapper>
    </Container>
  );
});

export default Header;
