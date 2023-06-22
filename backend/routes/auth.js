const express = require('express')
const router = express.Router()
const User = require('../models/User')
// For Validation
const { body, validationResult } = require('express-validator');

// Create a User using: POST endpoint:"/api/auth/createuser". No login require
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors , return Bad request and the errors
    const error = validationResult((req))
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    // check wheather the user with this email exits already
    try {

        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exits" })
        }

        //create a new user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        // send response
        res.json(user)
        // catch the error
    } catch (error) {
        console.error(error.message)

        res.status(500).send("Some Error occured")
    }


})


module.exports = router