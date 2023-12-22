import express from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.routes.js";
import loginRoute from "./src/routes/login.routes.js";

dotenv.config();
connectDatabase();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/user", userRoute);
app.use("/login", loginRoute);

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});