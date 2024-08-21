const express = require("express"); 
const { getSample } = require("../controllers/sample");
 
const Router = express.Router();

  
Router.get("/getSample", getSample); 

module.exports = Router;