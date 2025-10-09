const Order = require('../models/Order');

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.json({ ok: true, order });
  } catch (err) { next(err); }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().limit(100);
    res.json({ ok: true, orders });
  } catch (err) { next(err); }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ ok: true, order });
  } catch (err) { next(err); }
};
