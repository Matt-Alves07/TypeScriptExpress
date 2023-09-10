import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello from express");
});

app.post("/api/products", (req, res) => {
    console.log(req.body);

    return res.send("Product included.");
});

app.get("/api/products/example", (req: Request, res: Response) => {
    return res.json({
        name: "Clothe",
        price: 9.99,
        inStock: false
    })
})

app.listen(3000, () => {
    console.log("Express working");
});