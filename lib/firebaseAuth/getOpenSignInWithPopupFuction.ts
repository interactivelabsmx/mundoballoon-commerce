import { AuthProvider, signInWithPopup } from '@firebase/auth';
import { IBaeFunctionAuth } from './firebaseAuthTypes';

interface IGetOpenSignInWithPopupFuction extends IBaeFunctionAuth {
  provider: AuthProvider;
}

const getOpenSignInWithPopupFuction =
  ({ auth, provider, onOAuth, onError }: IGetOpenSignInWithPopupFuction) =>
  () =>
    signInWithPopup(auth, provider)
      .then(({ user }) => onOAuth(user))
      .catch((error) => onError(error));

export default getOpenSignInWithPopupFuction;
