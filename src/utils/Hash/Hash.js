const md5 = require('md5');

class Hash{
	constructor() {}

	generateHash(data) {
		const { password } = data;
		
		const hashData = data;

		const userPassaword = md5(password);

		data.password = userPassaword;

		return hashData;
	}
}

module.exports = {
	Hash,
}
