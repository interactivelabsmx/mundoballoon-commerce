import type { ICartContext } from './CommerceContext/CartContext';
import type { IPaymentsContext } from './CommerceContext/PaymentsContext';

export interface ICommerceProvider {
  setLocale: (newLang: string) => void;
  cart: ICartContext;
  payments: IPaymentsContext;
}
