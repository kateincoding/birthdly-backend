const express = require('express');
const BirthService = require('../services/birthService');
const faker = require('faker');
const router = express.Router();

const service = new BirthService();

router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
});

module.exports = router;