import type { Auth, User } from '@firebase/auth';
import { signOut, getAuth, onAuthStateChanged } from '@firebase/auth';
import { destroyCookie, setCookie } from 'nookies';
import type { ReactNode } from 'react';
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useRef,
} from 'react';
import '@lib/firebaseAuth/firebaseClient';

export const FI_BUF = Buffer.from('FIREBASE_COOKIE');
export const FI = FI_BUF.toString('base64');
export const FI_TTL = 30;
export const FI_COOKIE_OPTIONS = {
  maxAge: FI_TTL,
  sameSite: true,
  secure: true,
};

export const setTokenCookie = async (user: User) => {
  const token = await user.getIdToken();
  setCookie(undefined, FI, token, FI_COOKIE_OPTIONS);
};

type HandleAuth = (user: User) => void;

export type GetIdTokenFn = (
  forceRefresh?: boolean | undefined,
) => Promise<string>;

interface IAuthContext {
  user?: User;
  auth?: Auth;
  onOAuth: (user: User) => void;
  logout: () => void;
  authModalOpen: boolean;
  openAuthModal: (handleAuth?: HandleAuth) => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<IAuthContext>({
  onOAuth: () => null,
  logout: () => null,
  authModalOpen: false,
  openAuthModal: () => null,
  closeAuthModal: () => null,
});

export interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [auth, setAuth] = useState<Auth | undefined>();
  const [user, setUser] = useState<User | undefined>();
  const onAuth = useRef<HandleAuth | undefined>();

  const onOAuth = useCallback((user: User) => {
    setUser(user);
    setTokenCookie(user);
    if (onAuth.current && typeof onAuth.current === 'function') {
      onAuth.current(user);
      onAuth.current = undefined;
    }
  }, []);

  const logout = useCallback(() => {
    if (auth) signOut(auth).then(() => destroyCookie(undefined, FI));
    setUser(undefined);
  }, [auth]);

  const openAuthModal = useCallback((handleAuth?: (user: User) => void) => {
    if (handleAuth) onAuth.current = handleAuth;
    setAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => setAuthModalOpen(false), []);

  useEffect(() => setAuth(getAuth()), []);
  useEffect(() => {
    if (auth) onAuthStateChanged(auth, (user) => !!user && onOAuth(user));
  }, [auth, onOAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        auth,
        onOAuth,
        logout,
        authModalOpen,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
