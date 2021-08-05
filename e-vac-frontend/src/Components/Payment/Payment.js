import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Payment.css'

function Payment() {
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeded,setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [totalAmount,settotalAmount] = useState(150);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a
        //customer
        const getClientSecret = async () => {
            console.log("1")
            const response = await axios({
                method:'post',
                // Stripe expects the total in a currencies subunits
                url: `http://localhost:8000/payments/create?total=${totalAmount * 100}`
            });
            setClientSecret(response.data.clientSecret) 
        }
        getClientSecret();
    },[])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
        //do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: { 
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation


            setSucceeded(true);
            setError(null);
            setProcessing(false);

        })
        
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        // and display any errors as the customer types their card Details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");


    }


    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}

                        <form onSubmit = {handleSubmit}>
                            <CardElement  onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                {/* <CurrencyFormat/> */}
                                <p>
                                    {/* Part of the homework*/}
                                    totalAmount : <strong>₹{totalAmount}</strong>
                                </p> 
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>Processing</p> : "Payment"}</span>

                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>    
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Payment
