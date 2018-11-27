const usersModel = require('../models/users');

exports.getUsers = (req, res, next) => {
  usersModel
    .getUsers()
      .then((data) => {
        res.json({mesage: 'Get all users', data});
      })
      .catch((err) => {
        res.json({message: 'ERROR'});
      });
};

exports.createUser = (req, res, next) => {
  usersModel
    .createUser(req.body)
      .then((data) => {
        res.json({mesage: 'Create', data});
      })
      .catch((err) => {
        res.json({message: 'ERROR'});
      });
};

// exports.getUser = (req, res, next) => {
//   usersModel
//   .getUserById(req.params.id)
//     .then((data) => {
//       res.json({mesage: 'Get all users', data});
//     })
//     .catch((err) => {
//       res.json({message: 'ERROR'});
//     });
// };


exports.putUser = (req, res, next) => {
  usersModel
    .putUser(req.params.id, req.body)
      .then((data) => {
        res.json({mesage: 'update', data});
      })
      .catch((err) => {
        res.json({message: 'ERROR'});
      });
};

exports.deleteUser = (req, res, next) => {
  usersModel
    .deleteUser(req.params.id)
      .then((data) => {
        res.json({mesage: 'delete', data});
      })
      .catch((err) => {
        res.json({message: 'ERROR'});
      });
};