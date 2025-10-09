const jwt = require('jsonwebtoken');
module.exports = function generateToken(id){
  return jwt.sign({ id }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '30d' });
};