const Joi = require('joi');

const paswordSchema = Joi.string().min(3).max(10).alphanum();
console.log(paswordSchema.validate('q'));
