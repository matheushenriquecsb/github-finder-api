import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import "./search.css";
import { SearchProps } from "../../types/user";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="search">
      <h2>Busque por um usuário</h2>
      <p>Conheça os seus melhores repositórios</p>
      <div className="search_container">
        <input
          type="text"
          placeholder="Digite o nome do usuario"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
