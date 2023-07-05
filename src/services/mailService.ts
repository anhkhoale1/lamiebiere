// import nodemailer from 'nodemailer';
// // require('dotenv').config()
// // console.log(process.env)

// interface mailProps {
//   name: string;
//   message: string;
// }

// function sendEmail(params: mailProps) {
//   const transporter = nodemailer.createTransport({
//     service: 'SendinBlue', // no need to set host or port etc.
//     auth: {
//       user: 'leanhkhoa199937@gmail.com',
//       pass: 'fO1ZqrvnL4cKm2xB'
//     }
//   });

//   transporter.sendMail({
//             to: 'leanhkhoa199937@gmail.com',
//             from: 'leanhkhoa199937@gmail.com',
//             subject: 'Signup verification',
//             html: `<h1>Please verify your email</h1><a href="www.google.com"> 
//                    <button>Verify</button>`
//         })
//                 .then((res) => console.log("mail sent"))
//                 .catch((err) => console.log("Failed ", err))

// }

// export default sendEmail;