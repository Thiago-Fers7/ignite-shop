import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!priceId) return res.status(400).json({ error: 'Missing priceId' });

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = process.env.NEXT_URL;

  const checkout = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(200).json({ checkoutUrl: checkout.url })
}