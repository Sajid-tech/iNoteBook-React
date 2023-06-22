const express = require('express')
const router = express.Router()
const User = require('../models/User')
// For Validation
const { body, validationResult } = require('express-validator');

// Create a User using: POST endpoint:"/api/auth". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], (req, res) => {

    const error = validationResult((req))
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    // getting from user function
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => {
        res.json(user)
    }).catch(err => {
        { console.log(err) }
        res.json({ error: "please enter a unique value for email", message: err.message })
    })

})


module.exports = router