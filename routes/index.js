const router = require('express').Router();

// Import your modular routers for /notes and /tips
const notesRouter = require('./notes');


router.use('/notes', notesRouter);


module.exports = router;