import type { User } from '@firebase/auth';
import { FacebookAuthProvider } from '@firebase/auth';
import useTranslation from 'next-translate/useTranslation';
import type { Dispatch } from 'react';
import FacebookIcon from '@components/UI/Icons/FacebookIcon';
import type { IFirebaseSocialButton } from './FirebaseSoccialButton';
import FirebaseSocialButton from './FirebaseSoccialButton';

interface IFirebaseFacebookButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseFacebookButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseFacebookButton) => {
  const { t } = useTranslation('auth');
  const SocialButtonProps: IFirebaseSocialButton = {
    onAuthComplete,
    setRequestError,
    provider: new FacebookAuthProvider(),
    label: t('fb_button_label'),
  };
  return <FirebaseSocialButton {...SocialButtonProps} Icon={FacebookIcon} />;
};

export default FirebaseFacebookButton;
