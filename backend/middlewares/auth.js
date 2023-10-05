const jwt = require('jsonwebtoken');

const Unauthorized = require('../errors/unauthorized');

const { SECRET_KEY = 'mesto-key' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Unauthorized({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Unauthorized({ message: 'Необходима авторизация' });
  }

  req.user = payload;

  next();
};
