var express = require('express');
var router = express.Router();
const db = require('../config/database');

router.post('/', async function (req, res, next) {
  try {
    const { name, email, password } = req.body;

    const [result] = await db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );

    res.status(201).json({ userId: result.insertId });

  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;