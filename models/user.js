const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongose.Schema({
  username: { type: String, required: 'Please enter your username', unique: 'Please enter a different username' },
  firstName: { type: String, required: 'Please enter your First Name' },
  lastName: { type: String, required: 'Please enter your Last Name' },
  email: { type: String, required: 'Please enter your email', unique: 'This email has already been registered'},
  password: { type: String, required: 'Please enter your password' },
  verified: { type: Boolean, default: true },
  confirmCode: { type: String, required: true }
})

userSchema.virtual('post', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordMatch(next) {
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Password do not match')
  }

  next()

})

userSchema.pre('validate', function generateConfirmCode(next) {
  if(
    this.isModified('email')) {
    this.confirmCode = Math.random().toString(16).substr(2)
  }

  next()

})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()

})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)
