var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('users 发送了这句话');
});

// '/'的意思是/suers下的根路径
router.get('/xxx', function(req, res, next) {
  res.send('xxx 发送了这句话');
});

module.exports = router;
