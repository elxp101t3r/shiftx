import { initMongoose } from "../../lib/mongoose";
import Order from "../../models/Order";
import {buffer} from 'micro';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res){
    await initMongoose();
    const signingSecret = 'whsec_50457e8a7d81be9e06056841a7897009cebd190ad23fea9fd9572e68cf7f90c9';
    const payload = await buffer(req);
    const signature = req.headers['stripe-signature'];
    const event = stripe.webhooks.constructEvent(payload, signature, signingSecret);

    if(event?.type === 'checkout.session.completed'){
        const metadata = event.data?.object?.metadata;
        const paymentStatus = event.data?.object?.payment_status;
        if(metadata?.orderId && paymentStatus === 'paid'){
            await Order.findByIdAndUpdate(metadata.orderId, {paid:1});
        }
    }

    res.json('ok');
}

export const config = {
    api:{
        bodyParser: false,
    }
}