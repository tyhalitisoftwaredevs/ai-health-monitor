const Alert = require('../models/Alert');
exports.getAlerts = async (req, res) => {
  const alerts = await Alert.find({ user: req.user });
  res.json(alerts);
};