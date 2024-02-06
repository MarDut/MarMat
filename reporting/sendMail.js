const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  logger: true,
  auth: {
    user: 'cypress.tests.results@gmail.com',
    pass: 'tich vvpa eahv ohoi',
  },
});

const mailOptions = {
  from: 'cypress.tests.results@gmail.com',
  to: 'matolejniczak96@gmail.com',
  subject: 'Cypress Test Results',
  text: 'Test results are attached.',
  attachments: [
    {
      filename: 'tests-results.html',
      path: 'cypress/results/tests-results.html',
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
