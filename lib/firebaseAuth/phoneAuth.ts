import type { AuthError, ConfirmationResult } from '@firebase/auth';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from '@firebase/auth';
import type { IBaeFunctionAuth } from './firebaseAuthTypes';

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

interface IPhoneAuth extends IBaeFunctionAuth {
  phoneNumber: string;
  onCodeSent: (confirmationResult: ConfirmationResult) => void;
  onError: (error: AuthError) => void;
}

export const setRecaptchaVerifier = () => {
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-verifier-container',
    { size: 'invisible' },
    auth
  );
};

export const phoneCodeRequest = ({
  auth,
  phoneNumber,
  onCodeSent,
  onError,
}: IPhoneAuth) => {
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => onCodeSent(confirmationResult))
    .catch((error: AuthError) => onError(error));
};
