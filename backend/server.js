const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const addRouter=require("./router/add")

app.use("/api/add",addRouter)

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is running at ${PORT}`));
