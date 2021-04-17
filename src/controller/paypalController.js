import paypal from "../config/paypal"
import request from "request"

const createPayment = (req, res) =>{


    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '150'
            }
        }],
        application_context:{
            brand_name:`STS`,
            landing_page:'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `http://localhost:3000/execute-payment`,
            cancel_url: `http://localhost:3000/cancel-payment`,
        }
    }

    request.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders`,{
        auth,
        body,
        json: true
    }, (err, response) =>{
        res.json({
            data: response.body
        })
    })
    
}

