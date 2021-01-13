const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  let str

  // validation input
  if (req.query.text && req.query.text.trim() !== '') {
    str = req.query.text.trim()
  }

  // trigger if error
  if (!str) {
    return res
      .status(400)
      .json({
        error: 'no text'
      })
  }

  // reverse string
  const reversed = str.split('').reverse().join('')

  // response json
  return res.json({
    text: reversed,
    palindrome: str.toLowerCase() === reversed.toLowerCase()
  })
})

module.exports = router
