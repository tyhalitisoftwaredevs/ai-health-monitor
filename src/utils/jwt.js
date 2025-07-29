const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
exports.generateToken = (user) => jwt.sign({ id: user._id }, secret, { expiresIn: '1d' });
exports.verifyToken = (token) => jwt.verify(token, secret);