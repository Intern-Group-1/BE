const Account = require('../models/Account')
exports.roleAuthorization = (roles) => {
    return (req, res, next) => {
      var account = req.account
      Account.findById(account._id, (err, roleUser) => {
        if (err) {
          res.status(400).json({ error: 'No user found.' })
        }
        if (roles.indexOf(roleUser.role) > -1) {
          return next()
        }
        res
          .status(401)
          .json({ error: 'You are not authorized to view this content' })
        return next('Unauthorized')
      })
    }
  }