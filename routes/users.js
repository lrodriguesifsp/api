const express = require('express')
const router = express.Router()
const db = require('../config/database')

router.post('/', async function (req, res, next) {
  try {
    const { name, email, password } = req.body

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
    const values = [name, email, password]
    const [rows] = await db.execute(sql, values)

    console.log(rows)
    res.status(201).json({ insertId: rows.insertId });
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

module.exports = router;