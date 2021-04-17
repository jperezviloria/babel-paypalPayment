

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




export const CLIENT = 'PUBLIC_ID';
export const SECRET = 'SECRET_ID';
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

const auth = {
    user: CLIENT,
    pass: SECRET
}


export default auth;