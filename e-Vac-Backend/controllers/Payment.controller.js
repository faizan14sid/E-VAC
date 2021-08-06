import express from "express";
import cors from "cors";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51IpLApSFnkLGLRyHnIooiqqzcOtoqroZ6ZC3MqNMeXIU4KqysxYcSo66zQ0BFCPZ27u4EGPcCiYD9zPncKALHHLc00zQE1y4Xk');

// import { pkg } from 'uuid';

// const { v4: uuidv4 } = pkg;

const app = express();


app.use(express.json());
app.use(cors());


const Payment = (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    // const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id

    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        })
    })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
}

export default Payment;