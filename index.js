const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/categories", (req, res) => {
    res.send("All categories");
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});