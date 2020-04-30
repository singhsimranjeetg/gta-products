import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = "pk_test_V86YPyouDccGmQG8ZFmfCpG000Rt7k76BA"

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
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