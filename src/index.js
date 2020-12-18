const express = require("express");
const categories = require("./routes/categories.routes");
const users = require("./routes/users.routes");
const posts = require("./routes/posts.routes");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.use(categories);
app.use(users);
app.use(posts);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});