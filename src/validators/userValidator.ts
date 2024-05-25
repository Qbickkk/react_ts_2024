import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi
        .string()
        .pattern(/w{4,}/)
        .required()
        // .message('default')
        .messages({
            'string.pattern.base':'only words accepted',
            'string.required.base':'username is required',
        }),
    age: Joi.number().min(1).max(10).required().messages({
        'number.min':'min is 1 character',
        'number.max':'max is 10 character',
    })
})