var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sharmaa.shiv54@gmail.com',
    pass: 'hfqkyuuazfghngjn'
  }
});

var mailOptions = {
  from: 'sharmaa.shiv54@gmail.com',
  to: 'paras.s@quickwayinfosystems.in',
  subject: 'some test mail',
  text: 'Hello, How are you'
}

transporter.sendMail(mailOptions, function(error, info){

  if(error){
    console.log(error);
  }
  else{
    console.log("email has been sent to ", info.response);
    
  }
})