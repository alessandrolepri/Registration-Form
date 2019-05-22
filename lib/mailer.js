const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendMail( to, subject, body ) {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body
  })

    .then(info => console.log('EMAIL WAS SENT TO YOUR EMAIL ADDRESS', info))
    .catch(err => console.log(err))

}

function sendRegistrationEmail(user) {

  if(process.env.NODE_ENV === 'test') return false

  return sendMail(user.email, 'Thanks for registering', `Dear ${user.username}, Thank you for registering.

  Please click the following link to verify your account:
  http://localhost:8000/confirm/${user.confirmCode}



  Regards`)
}

function sendResetPassword(user) {

  if(process.env.NODE_ENV === 'test') return false

  return sendMail(user.email, 'Reset your password', `Dear ${user.username}, You recently requested to reset your password. To select a new password, click on the link below:

  http://localhost:8000/newpassword/${user._id}


  Regards`)

}


module.exports = {
  sendMail,
  sendRegistrationEmail,
  sendResetPassword
}
