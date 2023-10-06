const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createMessageValidator = [
    check('content', 'Error with content')
        .exists().withMessage('The content field is required')
        .isLength({ min: 1, max: 1000 }).withMessage('The content must be between 1 and 1000 characters')
        .notEmpty().withMessage('The content cannot be empty'),

    check('senderId', 'Error with senderId')
        .exists().withMessage('The senderId field is required')
        .notEmpty().withMessage('senderId cannot be empty')
        .isInt({ min: 1 }).withMessage('senderId must be an integer greater than or equal to 1'),
    validateResult,
];



module.exports = {
    createMessageValidator,
}
