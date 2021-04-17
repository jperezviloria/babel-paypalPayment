import auth, {PAYPAL_API, CLIENT, SECRET} from "../config/paypal"
import request from "request"

export const createPayment = (req, res) =>{


    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '75'
            }
        }],
        application_context:{
            brand_name:`Spanish Tongue Sound`,
            landing_page:'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `http://localhost:3003/execute-payment`,
            cancel_url: `http://localhost:3003/cancel-payment`,
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

export const executePayment = (req, res) =>{

    const token = req.query.token;
    //console.log(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`)
    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) =>{
        res.json({data: response.body})
    })

}

