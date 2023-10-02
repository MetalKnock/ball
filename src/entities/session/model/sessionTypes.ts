export interface RequestSession {
  username: string;
  password: string;
}

export interface SessionData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
