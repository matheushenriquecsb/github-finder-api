import { useState } from "react";
import Error from "../../components/Error/Error";
import Search from "../../components/Search/Search";
import User from "../../components/User/User";
import { fetchUserApi } from "../../hooks/fetchUser";
import { UserProps } from "../../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const clearUserAndError = () => {
    setError(false);
    setUser(null);
  };

  const handleUserLoad = async (username: string) => {
    clearUserAndError();

    try {
      const userData = await fetchUserApi(username);
      console.log(userData);

      if (userData.message === "Not Found") {
        setError(true);
        return;
      }

      setUser(userData);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <Search loadUser={handleUserLoad} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
