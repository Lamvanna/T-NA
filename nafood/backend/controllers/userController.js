const User = require('../models/User');

exports.listUsers = async (req, res, next) => {
  try {
    const users = await User.find().limit(200);
    res.json({ ok:true, users });
  } catch (err) { next(err); }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ ok:true, user });
  } catch (err) { next(err); }
};

exports.toggleStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    user.status = user.status === 'active' ? 'blocked' : 'active';
    await user.save();
    res.json({ ok:true, user });
  } catch (err) { next(err); }
};
