import { RepositoriesProps } from "../../types/repositories";

import Repos from "../../components/Repositories/Repos";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./repositories.css";
import fetchRepos from "../../hooks/fetchRepos";
import Loader from "../../components/Loader/Loader";

const Repositories = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepositoriesProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (username) {
      const loadRepos = async () => {
        setIsLoading(true);
        try {
          const reposData = await fetchRepos(username);
          console.log(reposData);
          setRepos(reposData);
        } catch (error) {
          console.error("Error fetching repositories:", error);
        }
      };

      setIsLoading(false);

      loadRepos();
    }
  }, [username]);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className="repos">
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className="repos_container">
          {repos.map((repo: RepositoriesProps) => (
            <Repos key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;
