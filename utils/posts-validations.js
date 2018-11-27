const joi = require('joi');

const postSchema = joi.object().keys({
  title: joi.string().required(),
  content: joi.string().required(),
  image: joi.string().base64().optional(),
  user_id: joi.string().required()
});

exports.createPostValidation = (req, res, next) => {
  joi.validate(req.body, postSchema, {
    abortEarly: false,
  })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(422).json({
        error: err.details
      });
    });
};