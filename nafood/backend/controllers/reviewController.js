const Review = require('../models/Review');

exports.list = async (req, res, next) => {
  try {
    const reviews = await Review.find().limit(200);
    res.json({ ok:true, reviews });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.json({ ok:true, review });
  } catch (err) { next(err); }
};
