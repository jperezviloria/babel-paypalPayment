import checkoutServerSdk from "@paypal/checkout-server-sdk";
import paypal from "@paypal/checkout-server-sdk"

// export const Client = () =>{
//     const credentials = new paypal.core.SandboxEnvironment(
//         clientId,
//         clientSecret
//     )

//     const httpClient = new paypal.core.PayPalHttpClient(credentials);

//     const request = new paypal.orders.OrdersCreateRequest();
//     request.headers["prefer"] = "return=representation";

//     return 
// }

const pay = paypal()


const CLIENT = 'CLIENTID';
const SECRET = 'SECRETID';
const PAYPAL_API = '';

const auth = {
    user: CLIENT,
    pass: SECRET
}


export default auth;