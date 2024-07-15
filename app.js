const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());

const index = require("./routes/index");
const todo = require("./routes/todo");

app.use("/", index);
app.use("/api/todo", todo);

app.listen("3000", () =>{
    console.log("Server started on port 3000");
})
