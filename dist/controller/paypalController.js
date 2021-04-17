"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executePayment = exports.createPayment = void 0;

var _paypal = _interopRequireWildcard(require("../config/paypal"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const createPayment = (req, res) => {
  const body = {
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '75'
      }
    }],
    application_context: {
      brand_name: `Spanish Tongue Sound`,
      landing_page: 'NO_PREFERENCE',
      user_action: 'PAY_NOW',
      return_url: `http://localhost:3003/execute-payment`,
      cancel_url: `http://localhost:3003/cancel-payment`
    }
  };

  _request.default.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders`, {
    auth: _paypal.default,
    body,
    json: true
  }, (err, response) => {
    res.json({
      data: response.body
    });
  });
};

exports.createPayment = createPayment;

const executePayment = (req, res) => {
  const token = req.query.token; //console.log(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`)

  _request.default.post(`${_paypal.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
    auth: _paypal.default,
    body: {},
    json: true
  }, (err, response) => {
    res.json({
      data: response.body
    });
  });
};

exports.executePayment = executePayment;