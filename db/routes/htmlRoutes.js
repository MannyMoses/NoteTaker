  
// Bring in Dependencies
let path = require('path'); 
let router = require("express").Router();

// GET Route for Notes 
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// If Route does not match, go to Home Page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Export the router for use
module.exports = router;