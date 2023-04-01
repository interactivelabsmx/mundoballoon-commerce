import type { PaymentIntent } from '@stripe/stripe-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { payment_intent } = req.query;

  const paymentIntent = (await stripe.paymentIntents.retrieve(
    payment_intent
  )) as PaymentIntent;

  switch (paymentIntent.status) {
    case 'succeeded':
      return res.redirect(302, '/checkout/order_complete?status=succeeded');
    case 'processing':
      return res.redirect(302, '/checkout/order_complete?status=succeeded');
    case 'requires_payment_method':
    default:
      return res.redirect('/checkout');
  }
}
