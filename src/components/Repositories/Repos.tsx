import { RepositoriesProps } from "../../types/repositories";

import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

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
        <BsCodeSlash /> {language}
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
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repos;
