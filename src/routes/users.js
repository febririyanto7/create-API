const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

// Create - POST
router.get('/', UserController.getAllUsers);

// Create - READ
router.post('/', UserController.createNewUser);

// UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);

module.exports = router;