import type { User } from '@firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import useTranslation from 'next-translate/useTranslation';
import type { Dispatch } from 'react';
import GoogleIcon from '@components/UI/Icons/GoogleIcon';
import type { IFirebaseSocialButton } from './FirebaseSoccialButton';
import FirebaseSocialButton from './FirebaseSoccialButton';

interface IFirebaseGoogleButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseGoogleButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseGoogleButton) => {
  const { t } = useTranslation('auth');
  const SocialButtonProps: IFirebaseSocialButton = {
    onAuthComplete,
    setRequestError,
    provider: new GoogleAuthProvider(),
    label: t('google_button_label'),
  };
  return <FirebaseSocialButton {...SocialButtonProps} Icon={GoogleIcon} />;
};

export default FirebaseGoogleButton;
