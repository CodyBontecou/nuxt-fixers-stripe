<script setup lang="ts">
const { createClient: createStripeClient } = useStripe()

async function checkout() {
  // Create a checkout session on the server
  const session = await $fetch('/api/stripe/session', {
    method: 'POST',
  })

  const stripe = await createStripeClient()

  // Redirect the user to the checkout page
  await stripe.redirectToCheckout({
    sessionId: session.id,
  })
}
</script>

<template>
  <button @click="checkout">Buy something</button>
</template>
