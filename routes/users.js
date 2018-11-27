const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.put('/:id', usersController.putUser);
router.delete('/:id', usersController.deleteUser);
module.exports = router;