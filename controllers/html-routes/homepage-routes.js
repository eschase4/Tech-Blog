const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/home', async (req, res) => {
  const postData = await Post.findAll({
    include: User,
  });
  // console.log(postData);
  // const userData = await User.findByPk(req.session.user_id);
  console.log(postData[0].dataValues);
  const loadPosts = postData.map((post) => ({
    id: post.id,
    title: post.title,
    text: post.text,
    user: post.username,
  }));
  loadPosts.reverse();
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    loadPosts,
  });
});

router.get('/newpost', (req, res) => {
  res.render('newpost', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
