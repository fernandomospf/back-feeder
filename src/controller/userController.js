const userService = require('../service/userService');

const create = async (req, res, next) => {
  try {
    await userService.create(req.body);
    return res.status(201).json({ message: 'Sucess create' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
