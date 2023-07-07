const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/newpost', async (req, res) => {
  try {
    console.info(`${req.method} request received to add a new review`);
    // console.log(req.session, 'hi');
    const userData = await User.findByPk(req.session.user_id);
    console.log(userData);
    const newPostData = await Post.create({
      title: req.body.title,
      text: req.body.text,
      username: userData.username,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
