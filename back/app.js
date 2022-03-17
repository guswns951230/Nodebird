// node는 webpack을 쓰지 않기 때문에 require와 module.exports를 사용한다
const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.get('/', (req, res) => { // '/' -> url, .get-> method
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

app.use('/post', postRouter);

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello' },
    { id: 3, content: 'hello' },
  ]);
});

app.listen(3065, () => {
  console.log('서버 실행 중!');
});