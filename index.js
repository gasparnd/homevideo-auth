const jwt = require('jsonwebtoken')

const [ , , option, secret, nameOrToken ] = process.argv

if( !option || !secret || !nameOrToken ) {
	return console.error(new Error('Missing arguments'))
}

const signToken = (payload, secret) => {
	return jwt.sign(payload, secret)
}

const verifyToken = (token, secret) => {
	return jwt.verify(token, secret)
}

if(option === 'sign') {
	console.log(signToken({ sub: nameOrToken }, secret))
} else if(option === 'verify') {
	console.log(verifyToken(nameOrToken, secret))
} else {
	console.log('Options need to be "sign" or "verify"')
}