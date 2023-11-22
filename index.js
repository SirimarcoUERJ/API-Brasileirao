const express = require("express");
const userRoute = require("./src/routes/user.routes.js")
const app = express();
const port = 3003;

/* app.get("/", (req, res) => {
    res.send("Hello World!")
});
 */
app.use("/soma", userRoute);

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});