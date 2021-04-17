"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _paypalController = require("../controller/paypalController");

const router = (0, _express.Router)();
router.route("/create-payment").post(_paypalController.createPayment);
router.route("/execute-payment").get(_paypalController.executePayment);
var _default = router;
exports.default = _default;