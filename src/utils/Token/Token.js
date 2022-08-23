require('dotenv').config();
const jwt = require('jsonwebtoken');

class Token {
  constructor(secret = process.env.MY_SECRET){
		this.secret = secret;
	}

	generate(data) {
		const token = jwt.sign({ data }, this.secret);

		return token;
	}

	verify(token) {
		const	decoded = jwt.verify(token, this.secret);

		return decoded;
	}
}

module.exports = {
	Token,	
}
