"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.set("port", 3003);
app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);