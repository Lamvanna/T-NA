// Simple stats placeholders
const Order = require('../models/Order');
const Product = require('../models/Product');

exports.revenue = async (req, res, next) => {
  try {
    // TODO: aggregate by date
    res.json({ ok:true, revenue: 0 });
  } catch (err) { next(err); }
};

exports.topProducts = async (req, res, next) => {
  try {
    // TODO: aggregation
    res.json({ ok:true, top: [] });
  } catch (err) { next(err); }
};