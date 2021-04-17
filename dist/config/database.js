"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

const pool = new _pg.Pool({
  user: 'protouser',
  host: 'localhost',
  password: 'passuser',
  database: 'UserDb',
  port: 5432
});
exports.pool = pool;