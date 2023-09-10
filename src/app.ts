import express  from "express";

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from express");
});

app.listen(3000, () => {
    console.log("Express working");
});