const { z } = require('zod');

const UserSchema = z.object({
  firstName: z
    .string({
      required_error: 'firstName is required',
      invalid_type_error: 'firstName must be a string',
    })
    .min(3, 'firstName must contain at least 3 character(s)'),
  lastName: z
    .string({
      required_error: 'lastName is required',
      invalid_type_error: 'firstName must be a string',
    })
    .min(3, 'firstName must contain at least 3 character(s)'),
  username: z
    .string({
      required_error: 'username is required',
    })
    .min(3, 'username must contain at least 3 character(s)'),
  email: z
    .string({
      required_error: 'email is required',
    })
    .email(),
  password: z
    .string({
      required_error: 'password is required',
      invalid_error: 'invalid password length',
      invalid_type_error: 'password must be a string',
    })
    .min(8, 'password must contain at least 8 character(s)')
    .regex(/[0-9]/, 'only alpha numeric character'),
});

module.exports = {
  UserSchema,
};
