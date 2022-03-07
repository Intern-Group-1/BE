const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AccountSchema = mongoose.Schema({
    email :{
        type: String,
        required:true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
   role: { type: String, enum: ['admin', 'doctor', 'customer','assistant'] },
})

AccountSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
    }
    next()
  })
  
  AccountSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
AccountSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    console.log(email)
    const user = await Account.findOne({ email })
    if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}
  
const Account = mongoose.model('Account', AccountSchema)
module.exports = Account