const express = require('express');
const CategoryService = require('../services/categoryService');
const faker = require('faker');
const router = express.Router();

const service = new CategoryService();

router.get('/', (req, res) => {
    const users = service.find();
    res.json(users);
});

module.exports = router;