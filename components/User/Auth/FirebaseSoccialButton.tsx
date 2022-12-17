import type { User, AuthError, AuthProvider } from '@firebase/auth';
import type { Dispatch, FC, SVGProps } from 'react';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import getOpenSignInWithPopupFuction from '@lib/firebaseAuth/getOpenSignInWithPopupFuction';
import { useAuth } from '@providers/AuthProvider';

export interface IFirebaseSocialButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
  provider: AuthProvider;
  label: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const FirebaseSocialButton = ({
  onAuthComplete,
  setRequestError,
  provider,
  label,
  Icon,
}: IFirebaseSocialButton) => {
  const { auth, onOAuth } = useAuth();
  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onOAuth(user);
  };
  const onError = (error: AuthError) => {
    setRequestError(error.message);
  };
  if (!auth) return <LoadingText />;
  const openSignInWithPopup = getOpenSignInWithPopupFuction({
    auth,
    provider,
    onOAuth: handleAuh,
    onError,
  });
  return (
    <SecundaryButton onClick={openSignInWithPopup} className="w-full">
      <span className="sr-only">{label}</span>
      {Icon && <Icon />}
    </SecundaryButton>
  );
};

export default FirebaseSocialButton;
