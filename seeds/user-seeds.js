const { User } = require('../models');

const userData = [
  {
    username: 'alex1234',
    email: 'alex1234@alex.com',
    password: 'aefgq35gere',
  },
  {
    username: 'stvee1234',
    email: 'stvee1234@alex.com',
    password: 'aefgasfaasf33e',
  },
  {
    username: 'brett1234',
    email: 'brett1234@alex.com',
    password: 'aeawfasfr4ere',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
