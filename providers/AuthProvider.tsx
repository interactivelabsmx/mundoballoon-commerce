import type { Auth, User } from '@firebase/auth';
import { signOut, getAuth, onAuthStateChanged } from '@firebase/auth';
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

type HandleAuth = (user: User) => void;

export type GetIdTokenFn = (
  forceRefresh?: boolean | undefined
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
    if (onAuth.current && typeof onAuth.current === 'function') {
      onAuth.current(user);
      onAuth.current = undefined;
    }
  }, []);

  const logout = useCallback(() => {
    if (auth)
      signOut(auth).then(() => {
        // TODO: Inform User of Logout
      });
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
