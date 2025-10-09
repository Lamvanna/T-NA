module.exports = function errorMiddleware(err, req, res, next){
  console.error(err);
  res.status(500).json({ ok:false, message: err.message || 'Server error' });
};