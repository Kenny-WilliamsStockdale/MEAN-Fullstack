const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
require("./app/routes/tutorial.routes")(app);
const poo = "ya man"

var corsOptions = {
  origin: "http://localhost:5002",
};

app.use(cors(corsOptions));

// connect to the database

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
  console.log(poo);
});
