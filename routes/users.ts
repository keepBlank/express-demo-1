import {RequestHandler} from 'express';

const  express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('users 发送了这句话');
} as RequestHandler);

// '/'的意思是/suers下的根路径
router.get('/xxx', function(req, res, next) {
  res.send('xxx 发送了这句话');
} as RequestHandler);

module.exports = router;
