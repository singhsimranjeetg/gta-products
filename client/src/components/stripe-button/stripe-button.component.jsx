import React from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = "pk_test_V86YPyouDccGmQG8ZFmfCpG000Rt7k76BA"

    const onToken = token => {
        axios({
            url : "payment",
            method: "post",
            data : {
                amount : priceForStripe,
                token
            }
        }).then( response => {
            alert("Payment Successful")
        }).catch(error => {
           console.log("Payment error", JSON.parse(error)) 
           alert("There was an issue with your payment. Please sure to use the available cards")
        })
    }




    return (
        <StripeCheckout  
        label = "Pay Now"
        name = "GTA PRODUCTS"
        billingAddress
        shippingAddress
       // image = "http://svgshare.com/i/CUz.svg" error 
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = "Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}

        />
    )
}

export default StripeCheckoutButton