const express = require('express');

const { Post, User, Image, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
  try {
    const posts = await Post.findAll({
      limit: 10,  // 한번에 불러오는 게시글 수
      order: [['createdAt', 'DESC']], // 최신 게시글부터 가져오기
      include: [{
        model: User,
      }, {
        model: Image,
      }, {
        model: Comment,
      }],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;