import type { AuthError, User, ConfirmationResult } from '@firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslation from 'next-translate/useTranslation';
import type { Dispatch } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import Input from '@components/UI/form/Input';
import { useAuth } from '@providers/AuthProvider';

export const userCodeSchema = yup
  .object({ code: yup.string().required() })
  .required();

interface IUserCodeForm extends Asserts<typeof userCodeSchema> {}

interface IFirebasePhoneCodeForm {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
  confirmationResult: ConfirmationResult;
  onCancel: () => void;
}

const FirebasePhoneCodeForm = ({
  onAuthComplete,
  setRequestError,
  confirmationResult,
  onCancel,
}: IFirebasePhoneCodeForm) => {
  const { t } = useTranslation('auth');
  const { onOAuth } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCodeForm>({
    resolver: yupResolver(userCodeSchema),
  });

  const onError = (error: AuthError) => setRequestError(error.message);

  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onOAuth(user);
  };

  const onSubmit: SubmitHandler<IUserCodeForm> = ({ code }) => {
    setRequestError('');
    confirmationResult
      .confirm(code)
      .then(({ user }) => handleAuh(user))
      .catch((error) => onError(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-8">
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder=""
              label={t('code')}
              error={errors?.code?.message}
            />
          )}
        />
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <PrimaryButton type="submit" className="mx-4">
          {t('common:confirm')}
        </PrimaryButton>
        <SecundaryButton onClick={onCancel} className="mx-4">
          {t('common:cancel')}
        </SecundaryButton>
      </div>
    </form>
  );
};

export default FirebasePhoneCodeForm;
