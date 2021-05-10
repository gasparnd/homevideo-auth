const express = require('express')
const session = require('express-session')

const app = express()

const PORT = 3000

app.use(session({
	resave: false, // not save cookies when happen on change
	saveUnitialized: false, // for default not save if cookie is not initialized
	secret: 'keyboard cat'
}))

app.get('/', (req, res) => {
	req.session.count = req.session.count ? req.session.count + 1 : 1
	res.status(200).json({ hello: 'world', counter: req.session.count })
})

app.listen(PORT, () => {
	console.log(`Linstening on localhost:${PORT}`)
})