const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'prospection@cours-anglais-clermont.fr', // Enter here email address from which you want to send emails
    pass: 'Acz!56uDpo#jdcca7' // Enter here password for email account from which you want to send emails
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

// REMOVE ONCE INTO PROD
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// REMOVE ONCE INTO PROD

app.post('/send', function (req, res) {

  let senderName = req.body.name;
  let senderEmail = req.body.contactFormEmail;
  let messageSubject = 'prospection ' + senderName;
  let messageText = req.body.contactFormMessage;
  // let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['prospection@cours-anglais-clermont.fr'], // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: messageSubject,
    text: messageText,
    // replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  // if (copyToSender) {
  //   mailOptions.to.push(senderEmail);
  // }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});
