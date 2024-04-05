import { defineStripeWebhook } from '@fixers/nuxt-stripe/server'

export default defineStripeWebhook(({ event, stripe, stripeEvent }) => {
  switch (stripeEvent.type) {
    case 'payment_intent.succeeded':
      // Give user premium feature/product

      break
    default:
      break
  }
})
