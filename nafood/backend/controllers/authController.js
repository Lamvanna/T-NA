const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // TODO: hash password, validate
    const user = await User.create({ name, email, password, role: 'user' });
    res.json({ ok: true, user, token: generateToken(user._id) });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ ok:false, message: 'Invalid credentials' });
    // TODO: check password
    res.json({ ok: true, user, token: generateToken(user._id) });
  } catch (err) { next(err); }
};
