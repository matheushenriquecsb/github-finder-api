import { RepositoriesProps } from "../../types/repositories";

import { AiOutlineFork, AiOutlineStar, AiOutlineGithub } from "react-icons/ai";
import "./repos.css";

const Repos = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepositoriesProps) => {
  return (
    <div className="repo">
      <h3>{name}</h3>
      <p>
        <AiOutlineGithub /> {language}
      </p>
      <div className="stats">
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className="repo_btn">
        <span>Acesse o código</span>
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default Repos;
