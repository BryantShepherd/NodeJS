const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "laituananh1711@gmail.com",
        pass: "zwixnxtddxzehklh"
    }
});

var mailOptions = {
    from: "laituananh1711@gmail.com",
    to : "tuananh.lai.54@gmail.com",
    subject: "Sending email from node.js",
    text: "How is this?"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw error;
    console.log(info.response);
});