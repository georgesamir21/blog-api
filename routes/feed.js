const express = require('express');
const feedController = require('../controllers/feed');
const postsValidations = require('../utils/posts-validations');
const router = express.Router();
// Begin to add routes
router.get('/posts', feedController.getPosts);
router.post('/post', postsValidations.createPostValidation, feedController.createPost);
router.put('/post/:id', feedController.putPost);
router.delete('/post/:id', feedController.deletePost);
module.exports = router;