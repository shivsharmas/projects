const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "mailto:sharmaa.shiv54@gmail.com",
      pass: "hfqkyuuazfghngjn" // Make sure to use environment variables for sensitive information
    }
  });

  const receiver = {
    from: "mailto:sharmaa.shiv54@gmail.com",
    to: "mailto:shivsharma5456@gmail.com",
    subject: "Node js testing mail",
    text: "Hello, this is testing mail"
  };

  auth.sendMail(receiver, (error, emailResponse) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Error sending email');
    } else {
      console.log("Email sent successfully!");
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Email sent successfully!');
    }
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
