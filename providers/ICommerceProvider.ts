import type { ICartContext } from './CartContext';
import type { IPaymentsContext } from './PaymentsContext';

export interface ICommerceProvider {
  setLocale: (newLang: string) => void;
  cart: ICartContext;
  payments: IPaymentsContext;
}
