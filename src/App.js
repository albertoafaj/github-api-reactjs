import React from "react";
import Layout from "./components/layout/index";
import NoSearch from "./components/no-search/NoSearch";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/githubHooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch></NoSearch>
      )}
    </Layout>
  );
};

export default App;

