import type { User } from '@firebase/auth';
import StripePaymentCustomer from './StripePaymentCustomer';

export interface IStripePayment {
  user: User;
}

const StripePayment = ({ user }: IStripePayment) => (
  <StripePaymentCustomer user={user} />
);

export default StripePayment;
