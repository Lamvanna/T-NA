const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: Schema.Types.ObjectId, qty: Number, price: Number }],
  total: Number,
  status: { type: String, default: 'pending' },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);