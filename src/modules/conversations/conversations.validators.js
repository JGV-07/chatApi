const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationValidator = [
    check('userId', 'Error with userId')
        .exists().withMessage('The userId field is required')
        .notEmpty().withMessage('The userId cannot be empty')
        .isInt({ min: 1 }).withMessage('userId must be an integer greater than or equal to 1'),

    check('participantId', 'Error with participantId')
        .exists().withMessage('The participantId field is required')
        .notEmpty().withMessage('participantId cannot be empty')
        .isInt({ min: 1 }).withMessage('participantId must be an integer greater than or equal to 1'),
    validateResult,
];

const createConversationGroupValidator = [
    check('userId', 'Error with userId')
        .exists().withMessage('The userId field is required')
        .notEmpty().withMessage('The userId cannot be empty')
        .isInt({ min: 1 }).withMessage('userId must be an integer greater than or equal to 1'),

    check('participantsIds', 'Error with participantsIds')
        .exists().withMessage('The participantsIds field is required')
        .isArray().withMessage('participantsIds must be an array')
        .notEmpty().withMessage('participantsIds cannot be empty')
        .custom(value => Array.isArray(value) && value.length >= 2).withMessage('There must be at least two participants')
        .custom(value => value.every(id => Number.isInteger(id) && id >= 1)).withMessage('Each participant must be an integer greater than or equal to 1'),

    check('title', 'Error with title')
        .exists().withMessage('The title field is required')
        .notEmpty().withMessage('The title cannot be empty')
        .isString().withMessage('The title must be a string')
        .isLength({ min: 2, max: 50 }).withMessage('The length of the title must be between 2 and 50 characters'),

    validateResult
];

module.exports = {
    createConversationValidator,
    createConversationGroupValidator
}
