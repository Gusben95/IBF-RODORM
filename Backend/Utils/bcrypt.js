const Bcrypt = require('bcryptjs');
require('dotenv').config();

const saltRounds = process.env.SALT_ROUNDS;

async function hashPassword(password) {
  const hashedPassword = await Bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function comparePassword(password, storedPassword) {
  const isTheSame = await Bcrypt.compare(password, storedPassword);
  return isTheSame;
}

module.exports = {
  hashPassword,
  comparePassword
};