const express = require("express");
const router = express.Router();

const {add}= require ("../controllers/add");
router.post("/",add);



module.exports = router;