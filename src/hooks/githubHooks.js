import { useContext } from "react";
import { GithubContext } from "../providers/github-provider/GithubProvider";

const useGithub = () => {
  const { githubState, getUser, getUserStarred, getUserRepos } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserStarred, getUserRepos };
};

export default useGithub;
