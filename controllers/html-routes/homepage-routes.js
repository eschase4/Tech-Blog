const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/home', async (req, res) => {
  const postData = await Post.findAll({
    include: User,
  });
  // res.status(200).json(postData);
  const loadPosts = postData.map((post) => ({
    id: post.id,
    title: post.title,
    text: post.text,
    user: post.user.username,
  }));
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    loadPosts,
  });
});
// username: loadPosts.user,

router.get('/newpost', (req, res) => {
  res.render('newpost', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
