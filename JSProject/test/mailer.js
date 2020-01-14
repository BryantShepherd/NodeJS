const mailer = require('nodemailer');

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'laituananh1711@gmail.com',
        pass: 'qxgguxuyhbzhliqy'
    }
});

var mailOptions = {
    from: 'laituananh1711@gmail.com',
    to: 'tuananh.lai.54@gmail.com',
    subject: "Send Email using node.js",
    text: "Is this easy though?"
};

function sendMail(option) {
    transporter.sendMail(option, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    mail: sendMail,
    options: mailOptions
};