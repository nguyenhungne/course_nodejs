const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const routes = require("./routes");

// HTTP logger
app.use(morgan("combined"));

//static
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(__dirname);

// Routes init
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
