const express = require('express')
const router = express.Router()
const Note = require('../models/Note')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');


// ROUTE 1:(read operation) Get all the notes using: GET "/api/notes/fetchallnotes". no login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)

        res.status(500).send("Internal Server Occured")
    }
})


// ROUTE 2:(create operation) Add a new Note using: POST "/api/notes/addnotes".  login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be at least 5 characters').isLength({ min: 5 })], async (req, res) => {



        try {
            const { title, description, tag } = req.body

            // If there are errors , return Bad request and the errors
            const error = validationResult((req))
            if (!error.isEmpty()) {
                return res.status(400).json({ error: error.array() })
            }

            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)
        } catch (error) {
            console.error(error.message)

            res.status(500).send("Internal Server Occured")
        }

    })


module.exports = router