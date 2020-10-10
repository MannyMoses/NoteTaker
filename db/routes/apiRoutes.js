// Require Dependencies
const router = require("express").Router();
const store = require("../db/store.js");

// GET Route for Notes
router.get("/notes", function(req, res) {
    store.getNotes()
    .then(notes => res.json(notes))   
});

// POST Route for Notes
router.post("/notes", function (req, res) {
    store.addNote(req.body)
    .then(note => res.json(note))   
});

// DELETE Route for Notes
router.delete("/notes/:id", function(req, res) {
    store.removeNote(req.params.id)
    .then(() => res.json({ok: true}))   
});

// Export Router for Use
module.exports = router;