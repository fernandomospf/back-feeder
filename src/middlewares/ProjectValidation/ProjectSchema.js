const { z } = require('zod');

const ProjectSchema = z.object({
  nameProject: z.string({
    required_error: 'NameProject is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  url: z.string({
    required_error: 'Url is required',
  }),
  gif: z.optional(),
  module: z.string({
    required_error: 'Module is required',
  }),
  difficult: z.string({
    required_error: 'Difficult is required',
  }),
  stacks: z.array(z.string())
});

module.exports = ProjectSchema;
