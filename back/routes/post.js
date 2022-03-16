const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {  // Post /post
  res.json({ id: 1, content: 'hello' })
});

router.delete('/', (req, res) => {  // Delete /post
  res.json({ id: 2 });
});

module.exports = router;