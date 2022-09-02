const { CustomError } = require('../../utils/CustomError/CustomError');
const { hash } = require('../../utils/Hash');
const { token } = require('../../utils/Token');
const { UserImplemetation } = require('./UserImplementation');

class UserService {
  constructor(userImplemetation = new UserImplemetation()) {
    this.userImplemetation = userImplemetation;
  }

  async loginUser(dataUserLogin) {
    const hashUser = hash.generateHash(dataUserLogin);

    const userFound = await this.userImplemetation.findingUser(hashUser);

    if (!userFound) {
      throw new CustomError(404, 'User not found');
    }

    const { id, name, username, email, classname } = userFound;

    const userToken = token.generate({ username });

    const objectUser = {
      id,
      name,
      username,
      email,
      token: userToken,
      classname,
    };

    return objectUser;
  }

  async registerUser(dataUserRegister) {
    const { firstName, lastName, email } = dataUserRegister;

    const fullName = `${firstName} ${lastName}`;

    const allUsers = await this.userImplemetation.findAllUsers();

    const allUsersName = allUsers.filter(
      (user) => user.name === fullName || user.email === email
    );

    if (allUsersName.length > 0) {
      throw new CustomError(400, 'User already exist');
    }

    const newUser = await this.userImplemetation.createUser(
      fullName,
      dataUserRegister
    );

    return newUser;
  }
}

module.exports = {
  UserService,
};
