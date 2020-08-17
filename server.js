// Express
import express from 'express'; // 引用express套件
import bodyparser from 'body-parser';
const app = express();
const port = 3000; // server啟動在3000 port

//解析json
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// router 設定
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  res.json({
    name: req.body.name,
    age: req.body.age,
    test: 'test',
  });
});

// 啟動server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
