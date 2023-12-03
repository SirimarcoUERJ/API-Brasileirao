const express = require("express");
const userRoute = require("./src/routes/user.routes.js");
const connectDatabase = require("./src/database/db.js");

const app = express();
const port = 3003;

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});