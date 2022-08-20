const express = require("express"); // nap thu vien express
const morgan = require("morgan"); // nap thu vien morgan ban ra log khi thay doi trang

const path = require("path");
const { engine } = require("express-handlebars"); // thu vien template engine

const app = express(); // goi function express() -> tra lai doi tuong dai dien cho ung dung cua ban 
const port = 3000; // run website o port 3000

app.use(express.static(path.join(__dirname, "public"))); // xu ly static file

// HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route -  tuyen duong, dau '/', khai bao tuyen duong '/' -> chuoi 'Hello World'
app.get("/", (req, res) => res.render("home"));

app.get("/news", (req, res) => res.render("news"));

// localhost: 127.0.0.1
app.listen(
  port,
  () => console.log(`Example app listening on port http://localhost:${port}`) // app lang nghe cong 3000
);
