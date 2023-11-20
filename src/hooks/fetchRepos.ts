import { RepositoriesProps } from "../types/repositories";

const fetchRepos = async (username: string): Promise<RepositoriesProps[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  const orderedRepos = data.sort(
    (a: RepositoriesProps, b: RepositoriesProps) =>
      b.stargazers_count - a.stargazers_count
  );
  return orderedRepos.slice(0, 5);
};

export default fetchRepos;
