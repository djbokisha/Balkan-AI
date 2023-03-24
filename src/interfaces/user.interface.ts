export interface User {
  email: string;
  password: string;
  name?: string;
  refreshToken?: string;
  username: string;
  isEmailVerified?: boolean;
  payments?: string[];
  tokens?: number;
  id?: string
}
