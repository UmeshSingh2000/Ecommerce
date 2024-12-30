const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);
const EXCHANGE_RATE = 0.012;
router.post('/create-checkout-session', async (req, res) => {
    const { products } = req.body;
    // Validate the products array
    if (!products || products.length === 0) {
        return res.status(400).json({ error: 'No products provided' });
    }

    // Create line items for Stripe checkout
    const lineItems = products.map(product => {
        if (!product.title || !product.src || !product.price || !product.qnty) {
            return res.status(400).json({ error: 'Product data is missing required fields' });
        }
        const priceInINR = parseFloat(product.price.slice(1));
        const priceInUSD = Math.round(priceInINR * EXCHANGE_RATE * 100);
        console.log(priceInUSD);
        



        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.title,
                    images: [product.src]
                },
                unit_amount: priceInINR,
            },
            quantity: product.qnty
        };
    });

    try {
        // Create checkout session with Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:5173/`,
            cancel_url: `http://localhost:5173/category/Neckband`,
        });

        // Send the session ID back to the client
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
