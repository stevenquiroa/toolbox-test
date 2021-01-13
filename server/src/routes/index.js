const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.json({
    title: 'Toolbox Test Backend',
    description: 'El backend de test para la prueba de Fullstack',
    version: '1.0.0',
    status: 'up'
  })
})

module.exports = router
