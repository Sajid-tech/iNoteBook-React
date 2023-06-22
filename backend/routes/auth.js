const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    obj = {
        a: 'yhios',
        number: 5
    }
    res.send(obj)
})


module.exports = router