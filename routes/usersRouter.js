const express = require('express');
const UserService = require('../services/userService');
const faker = require('faker');
const router = express.Router();

const service = new UserService();

router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
});

module.exports = router;