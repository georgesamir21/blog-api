const feedsModel = require('../models/feed');

module.exports = {
  getPosts: (req, res, next) => {
    // get posts from the db
    feedsModel.getPosts()
      .then((data) => res.status(200).json({message: 'Get POSTS', data}))
      .catch((err) => res.json({error: true, err}));
  },

  createPost: (req, res, next) => {
    // Add post in db
    feedsModel.createPost(req.body)
      .then((data) => res.status(201).json({message: 'user created', data}))
      .catch((err) => res.json({error: true, err}));
  },

  putPost: (req, res, next) => {
    // hit db and edit the post with  id = req.params.id
    res
      .json({
        message: `edit of ${req.params.id} success!`
      });
  },

  deletePost: (req, res, next) => {
    // hit db and delete the post with  id = req.params.id
    res
      .json({
        message: `delete of ${req.params.id} success!`
      });
  }
};