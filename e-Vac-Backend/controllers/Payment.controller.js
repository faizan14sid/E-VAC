const express = require('express') 
const app = express() 
app.use(express.json());

var Publishable_Key = '###publishablekey###'
var Secret_Key = '###secretkey#####'

const stripe = require('stripe')(Secret_Key) 
 




export const Payment =  async(req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,     //subunits of the currency
        currency: "INR",                        
    });

    // OK -Created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

}









// export const Payment = (req, res) => { 
//     // Moreover you can take more details from user 
//     // like Address, Name, etc from form 
//     stripe.customers.create({ 
//         email: req.body.stripeEmail, 
//         source: req.body.stripeToken, 
//         name: req.body.name, 
//         address: req.body.address
//     }) 
//     .then((customer) => { 

//         return stripe.charges.create({ 
//             amount: req.body.amount, 
//             description: req.body.amount, 
//             currency: 'INR', 
//             customer: customer.id 
//         }); 
//     }) 
//     .then((charge) => { 
//         res.send("Success") // If no error occurs 
//     }) 
//     .catch((err) => { 
//         res.send(err)    // If some error occurs 
//     }); 
// } 
