import { UserProps } from "../types/user";

export async function fetchUserApi(username: string): Promise<UserProps> {
  const res = await fetch(`https://api.github.com/users/${username}`);

  const data = await res.json();

  const { avatar_url, login, location, followers, following, message } = data;

  const userData: UserProps = {
    avatar_url,
    login,
    location,
    followers,
    following,
    message,
  };

  return userData;
}
