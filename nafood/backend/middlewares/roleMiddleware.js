module.exports = function roleMiddleware(roles = []){
  return function(req, res, next){
    if (!req.user) return res.status(401).json({ ok:false });
    if (!Array.isArray(roles)) roles = [roles];
    if (roles.length && !roles.includes(req.user.role)) return res.status(403).json({ ok:false, message:'Forbidden' });
    next();
  }
};