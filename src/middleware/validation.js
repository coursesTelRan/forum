
import Joi from 'joi';

const schema = {
    createPost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    }),

    addComment: Joi.object({
        message: Joi.string().required()
    }),

    updatePost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    })
}
const validation = (schemaName) => {
    return (req, res, next) => {
        const selectedSchema = schema[schemaName];
        if (!selectedSchema) {
            return res.status(400).json({ message: `Schema ${schemaName} not found` });
        }
        const { error } = selectedSchema.validate(req.body);
        if (error) {
            return res.status(400).send({
                code: 400,
                status: 'BadRequest',
                message: error.details[0].message,
                path: req.path
            });
        }
        next();
    };
};


export default validation;