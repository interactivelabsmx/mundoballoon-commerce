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
import {
  FI,
  FI_COOKIE_OPTIONS,
  checkForExpiredCookieToken,
} from '@lib/firebaseAuth/utils';

type HandleAuth = (user: User) => void;

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

export function AuthProvider({ children }: IAuthProvider) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [auth, setAuth] = useState<Auth | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const onAuth = useRef<HandleAuth | undefined>(undefined);

  const onOAuth = useCallback(
    async (user: User) => {
      setUser(user);
      if (onAuth.current && typeof onAuth.current === 'function') {
        onAuth.current(user);
        onAuth.current = undefined;
      }
      setCookie({}, FI, await user.getIdToken(), FI_COOKIE_OPTIONS);
    },
    [setUser]
  );

  const refreshIdToken = useCallback(async () => {
    setCookie({}, FI, (await user?.getIdToken(true)) || '', FI_COOKIE_OPTIONS);
  }, [user]);

  const logout = useCallback(() => {
    if (auth)
      signOut(auth).then(() => {
        // TODO: Inform User of Logout
      });
    destroyCookie(null, FI, { path: '/' });
    setUser(undefined);
  }, [setUser, auth]);

  const openAuthModal = useCallback((handleAuth?: (user: User) => void) => {
    if (handleAuth) onAuth.current = handleAuth;
    setAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => setAuthModalOpen(false), []);

  useEffect(() => checkForExpiredCookieToken(refreshIdToken), [refreshIdToken]);
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
}

export const useAuth = () => useContext(AuthContext);
