const jwt = require('jsonwebtoken')
const Account = require('../models/Account')

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  console.log(token)
  const data = jwt.verify(token, process.env.JWT_KEY)
  try {
    const account = await Account.findOne({ _id: data._id, 'tokens.token': token })
    if (!account) {
      throw new Error()
    }
    req.account = account
    req.token = token
    next()
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}

module.exports = auth
