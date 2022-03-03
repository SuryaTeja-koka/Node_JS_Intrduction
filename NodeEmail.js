var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourmail@gmail.com',
        pass: 'yourpassword'
    }
})

var options = {
    from: 'yourmail@gmail.com',
    to: 'yourrespondentmail@gmail.com',
    subject: 'Your Subject',
    text: 'body of your mail'
}

transporter.sendMail(options, (err, info) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Email is sent' + info.response)
    }
})

// you need to agree the condition that the account is yours
// you need to run the server for twice 