const express = require("express"); // nap thu vien express
const app = express(); // goi function express() -> tra lai doi tuong dai dien cho ung dung cua ban
// su dung xuyen suot
const port = 3000; // run website o port 3000

// route -  tuyen duong, dau '/', khai bao tuyen duong '/' -> chuoi 'Hello World'
app.get("/", (req, res) => res.send("Hello World!"));

// localhost: 127.0.0.1
app.listen(
  port,
  () => console.log(`Example app listening on port http://localhost:${port}`) // app lang nghe cong 3000
);
