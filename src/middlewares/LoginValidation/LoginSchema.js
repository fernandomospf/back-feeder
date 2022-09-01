const { z } = require('zod');

const LoginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }).email({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }),
  password: z.string({
    required_error: "Email is required",
    invalid_error: "invalid password length",
    invalid_type_error: "Name must be a string"
  }).min(8).regex(/[0-9]/, "only alpha numeric character"),
})

module.exports = {
  LoginSchema
}
