const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}); 

// const sendMailToUserr =async (email,username)=>{
   
//     try {
//           const mailoption= {
//             from: "vvarthan351@gmail.com",
//             to: email,
//             subject:"Alert! Your Account Has Been Hacked",
//             html:`<p>Hello <strong>${username}</strong>,</p>
//                 <p>We detected suspicious activity on your account.</p>
//                 <p>To secure your account, please reset your password immediately:</p>
//                 <a href="" style="color: red; font-weight: bold;"></a>
//                 <p>If you didn’t request this change, please contact support 100.</p>`

//           }
//           await transporter.sendMail(mailoption)
//           console.log(`Mail sended to ${username}`);
//     } catch (error) {
//         console.log("Mail Error:", error);
//     } 

// };


const sendApprovalEmail = async (captainEmail,subject,text) => {
    console.log("captain" ,captainEmail);
    
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: captainEmail,
        subject: subject,
        text: text
      };
    
      try {
        await transporter.sendMail(mailOptions);
        console.log('Approval email sent');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

module.exports=sendApprovalEmail;