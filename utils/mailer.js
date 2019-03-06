const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const keys = require('../config/keys');
const mailer = require('../config/mailer');

const transport = mailgunTransport(keys.mailgun);

class Mailer {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport);
  }

  sendMail(to, subject, text, html) {
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail(
        {
          from: mailer.from,
          to,
          subject,
          text,
          html
        },
        (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });
  }
}

module.exports = new Mailer();
