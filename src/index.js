const express = require("express");
const router = require("./routes/index.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});