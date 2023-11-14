export type UserProps = {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
  message: string;
};

export type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
