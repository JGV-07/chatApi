const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const registerUserValidator = [
    check('firstname', 'Error with firstname')
        .exists().withMessage('There is not include firstname')
        .notEmpty().withMessage('The firstname cant be empty')
        .isString().withMessage('The value firstname must be string')
        .isLength({ min: 2, max: 50 }).withMessage('The longitude of the name must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]/) // Para validar que no mande expresiones como .. etc.
        .withMessage('The firstname only accept letters'),
    check('lastname', 'Error with lastname')
        .exists().withMessage('There is not include lastname')
        .notEmpty().withMessage('The lastname cant be empty')
        .isString().withMessage('The value lastname must be string')
        .isLength({ min: 2, max: 50 }).withMessage('The longitude of the name must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]/) // Para validar que no mande expresiones como .. etc.
        .withMessage('The lastname only accept letters'),
    check('email', 'Error with the field email')
        .exists().withMessage('The property email is not included')
        .notEmpty().withMessage('The property email cant be empty')
        .isString().withMessage('The property email must be a string')
        .isEmail().withMessage('The property email havent the format of email')
        .isLength({ min: 7, max: 50 }).withMessage('The property email must be min 7 and max 50 characters'),
    check('password', 'Error en el campo password')
        .exists().withMessage("The property password is not included")
        .notEmpty().withMessage('The property password cant be empty')
        .isString().withMessage('The property password must be a string')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%-^&*]{8,}$/
        )
        .withMessage(
            "The password must be min 8 characters, an uppercase letter, a lowercase letter, and a special character"
        ),
    validateResult,
];


const loginValidatior = [
    check('email', 'Error with the property email')
        .exists().withMessage('The property email is not included')
        .notEmpty().withMessage('The property email cant be empty')
        .isString().withMessage('The value lastname must be string')
        .isEmail().withMessage('The property email havent the format of email'),
    check('password', 'Error en el campo password')
        .exists().withMessage("The property password is not included")
        .notEmpty().withMessage('The property password cant be empty')
        .isString().withMessage('The property password must be a string'),
    validateResult
];

module.exports = {
    registerUserValidator,
    loginValidatior
}