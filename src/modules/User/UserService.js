const { CustomError } = require('../../utils/CustomError/CustomError');
const { hash } = require('../../utils/Hash');
const { token } = require('../../utils/Token');
const { UserImplemetation } = require('./UserImplementation');


class UserService {
  constructor(userImplemetation = new UserImplemetation()){
    this.userImplemetation = userImplemetation;
  }
  async loginUser(dataUserLogin) {
    const hashUser = hash.generateHash(dataUserLogin);
    
    const userFound = await this.userImplemetation.findingUser(hashUser);

    if(!userFound) {
      throw new CustomError(404, 'User not found');
    }

    const { id, name, email, password } = userFound;

    const userToken = token.generate({ userId: id, userEmail: email });

    const objectUser = {
      id,
      name,
      email,
      password,
      token: userToken,
    }

    return objectUser;
  }
}

module.exports = {
  UserService,
}
