import { FacebookAuthProvider, User } from '@firebase/auth';
import useTranslation from 'next-translate/useTranslation';
import { Dispatch } from 'react';
import FacebookIcon from '@components/UI/Icons/FacebookIcon';
import FirebaseSocialButton, {
  IFirebaseSocialButton,
} from './FirebaseSoccialButton';

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
