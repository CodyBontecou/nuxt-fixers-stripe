import { eventHandler } from 'h3'
import Stripe from 'stripe'

export default eventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()
  const stripe = new Stripe(runtimeConfig.NUXT_STRIPE_SECRET)

  const session = await stripe.checkout.sessions.create({
    customer_email: 'codybontecou@gmail.com',
    payment_intent_data: {
      receipt_email: 'codybontecou@gmail.com',
    },
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: 10.0 * 100,
          product_data: {
            name: 'Test item (10 usd)',
          },
        },
      },
    ],
    success_url: 'http://localhost:3000/',
  })

  return session
})
