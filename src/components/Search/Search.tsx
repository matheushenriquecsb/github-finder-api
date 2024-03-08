import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import "./Search.css";

type SearchPropss = {
  loadUser: (userName: string) => Promise<void>;
};

const SearchUser = ({ loadUser }: SearchPropss) => {
  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    if (_e?.type === "click" || _e?.type === "keydown") {
      loadUser(value);
    }
  };

  return (
    <div className="search">
      <h2>Busque um usuário do Github</h2>
      <p>Conheça os seus melhores repositórios</p>
      <div className="search_container">
        <Space direction="vertical">
          <Search
            type="text"
            placeholder="Digite o nome do usuário"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>
      </div>
    </div>
  );
};

export default SearchUser;
