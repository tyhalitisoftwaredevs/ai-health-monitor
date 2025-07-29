const mongoose = require('mongoose');
const EntitySchema = new mongoose.Schema({
  name: String,
  description: String,
  riskLevel: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Entity', EntitySchema);