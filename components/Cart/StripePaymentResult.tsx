interface IStripePaymentResult {
  status: string;
}

export const StripePaymentResult = ({ status }: IStripePaymentResult) => {
  return <>{status}</>;
};

export default StripePaymentResult;
