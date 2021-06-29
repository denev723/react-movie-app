import { withRouter } from "react-router-dom";

const Home = withRouter(({ location, history }) => {
  console.log(location, history);
  if (location.pathname === "/") {
    history.push("/movies");
  }
  return null;
});

export default Home;
