const express = require("express");
const app = express();


app.get("/book", logger1,(req, res) => {
  console.log(" hello i am done with help of logger");
  return res.send("fetching all the books");
});

app.get("/books", logger2,(req, res) => {
  console.log("hello from user2");
  return res.send({
    name: "book",
    name2:"divash"
  });
});

app.get("/books1", logger3, (req, res) => {
  console.log("hello from user3");
  return res.send({
    name: "book",
    name2: "divash",
  });
});

function logger1(req, res, next) {
  console.log(" i am logger before done1");
  next();
  console.log(" i am logger after done1");
}

function logger2(req, res, next) {
  console.log(" i am logger before done2");
  next();
  console.log(" i am logger after done2");
}

function logger3(req, res, next) {
  console.log(" i am logger before done3");
  next();
  console.log(" i am logger after done3");
}


app.listen("2345", () => {
  console.log(" running on 2345");
});


