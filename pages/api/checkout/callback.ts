import type { PaymentIntent } from '@stripe/stripe-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import { getClient } from '@lib/apollo/apolloClient';
import { FI } from '@providers/AuthProvider';
import { CreateOrderDocument } from './CreateOrder.graphql';
import type { CreateOrderMutationVariables } from './CreateOrder.graphql';

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
    case 'succeeded': {
      const client = getClient();
      const variables: CreateOrderMutationVariables = {
        paymentId: paymentIntent.id,
      };

      const cookies = parseCookies({ req });
      const token = cookies[FI];
      const { data, errors } = await client.mutate({
        mutation: CreateOrderDocument,
        variables,
        context: { headers: { authorization: `Bearer ${token}` } },
      });

      if (errors) return res.redirect('/checkout?status=error');

      // try {
      //   const result = await fetch(graphQLUrl, {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ query, variables }),
      //   }).then((response) => response.json());
      //   console.log(result);
      // } catch (e) {
      //   console.log(e);
      //   return res.redirect('/checkout?status=error');
      // }
      return res.redirect(
        302,
        `/checkout/order_complete?orderId=${data.createOrder.orderId}`
      );
    }
    case 'processing':
      return res.redirect(302, '/checkout/order_complete?status=succeeded');
    case 'requires_payment_method':
    default:
      return res.redirect('/checkout?status=error');
  }
}
