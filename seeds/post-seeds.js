const { Post } = require('../models');

const postData = [
  {
    title: 'Tasty',
    text: 'I freaking love eating cheeseburgers',
    username: 'alex1234',
    user_id: 1,
  },
  {
    title: 'This ipod is really cool',
    text: 'bro this ipod is cool as heck, its got over 4 gigabytes, thats like, 1000 songs.',
    username: 'stvee1234',
    user_id: 2,
  },
  {
    title: 'Still',
    text: 'Still thinking about how much I freaking love eating cheeseburgers',
    username: 'grerg1342',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
