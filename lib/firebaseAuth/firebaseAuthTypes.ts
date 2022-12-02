import { Auth, AuthError, User } from '@firebase/auth';

export interface IBaeFunctionAuth {
  auth: Auth;
  onOAuth: (user: User) => void;
  onError: (error: AuthError) => void;
}
