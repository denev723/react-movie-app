import React from "react";
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

const Container = styled.div``;

const ItemWrapper = styled.ul`
  max-width: 960px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
  border-bottom: 1px solid ${(props) => (props.current ? "blue" : "none")};
  padding: 5px 5px;
`;

const Movies = withRouter(({ location: { pathname } }) => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Container>
        <ItemWrapper>
          <Item current={pathname === `${url}/top-rated`}>
            <Link to={`${url}/top-rated`}>Top Rated</Link>
          </Item>
          <Item current={pathname === `${url}/popular`}>
            <Link to={`${url}/popular`}>Popular</Link>
          </Item>
          <Item current={pathname === `${url}/upcoming`}>
            <Link to={`${url}/upcoming`}>Upcoming</Link>
          </Item>
        </ItemWrapper>
      </Container>
      <Switch>
        <Route exact path={path}>
          <NowPlaying />
        </Route>
        <Route path={`${path}/top-rated`}>
          <TopRated />
        </Route>
        <Route path={`${path}/popular`}>
          <Popular />
        </Route>
        <Route path={`${path}/upcoming`}>
          <Upcoming />
        </Route>
      </Switch>
    </div>
  );
});

export default Movies;
