const Banner = require('../models/Banner');

exports.list = async (req, res, next) => {
  try {
    const banners = await Banner.find().limit(50);
    res.json({ ok:true, banners });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const banner = await Banner.create(req.body);
    res.json({ ok:true, banner });
  } catch (err) { next(err); }
};
