// const User = require('../models/User')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// exports.pre = async function (next) {
//     // Hash the password before saving the user model
//     const user = this
//     if (user.isModified('password')) {
//       user.password = await bcrypt.hash(user.password, 8)
//     }
//     next()

// }

// exports.findByCredentials = async (email, password) => {
//     // Search for a user by email and password.
//     const user = await User.findOne({ email })
//     if (!user) {
//       throw new Error({ error: 'Invalid login credentials' })
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password)
//     if (!isPasswordMatch) {
//       throw new Error({ error: 'Invalid login credentials' })
//     }
//     return user
// }