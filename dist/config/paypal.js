"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PAYPAL_API = exports.SECRET = exports.CLIENT = void 0;
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
const CLIENT = 'ARlVRVR-Pd53MtvZdtlcnJkGbP8ZUrl_e3ZMXsXCvYB2P-5MEzCzXDSfyRwxopoAj7e_Svxah06lJ_pC';
exports.CLIENT = CLIENT;
const SECRET = 'EBzrXI89TLlxs4koTWrmP9fz02dX21uzyaNN5YF4krnT5v0dO36HYp8D-3tgAkrLC00UhYlEdru6M_-T';
exports.SECRET = SECRET;
const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
exports.PAYPAL_API = PAYPAL_API;
const auth = {
  user: CLIENT,
  pass: SECRET
};
var _default = auth;
exports.default = _default;