const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write('<h1>Hello node</h1>');
  res.write('<h2>Hello node</h2>');
  res.write('<h3>Hello node</h3>');
  res.write('<h4>Hello node</h4>');
  res.end('<h5>Hello node</h5>');
});
server.listen(3065, () => {
  console.log('서버 실행 중');
});