import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        'number.min': 'min is 1',
        'number.max': 'max is 10',
    }),
    title: Joi.string().pattern(/[a-zA-Z]/).required().messages({
        'string.pattern.base':'only words accepted'
    }),
    body: Joi.string().pattern(/[a-zA-Z]/).required().messages({
        'string.pattern.base':'only words accepted'
    }),
})