const userService = require('../service/userService');

const create = async (req, res) => {
  await userService.create(req.body);
  return res.status(201).json({ message: 'Sucess create'});
}

module.exports = create;