const { Router } = require('express');
const { User, Participant } = require("../../models");
const { registerUser, loginUser, validateUserEmail, reverifyEmail, getAllUsers, uploadAvatar } = require('./user.controllers');
const authenticate = require("../../middlewares/auth.middleware");
const { registerUserValidator, loginValidatior } = require('./user.validators');
const upload = require("../../middlewares/imageUpload.middleware");

const router = Router();

router
  .route("/") // api/v1/users
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser)
  .get(async (req, res, next) => {
    try {
      const result = await User.findAll({
        include: {
          model: Participant,
        },
      });
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

router.put('/:id', authenticate,  upload.single('avatar'), uploadAvatar)

router.post('/login', loginValidatior ,loginUser);

router.post('/validate', validateUserEmail);

router.post('/reverify-email', reverifyEmail);

module.exports = router;


