/* import nodeMailer from "nodemailer"

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: `${process.env.MAIL}`,
        pass: `${process.env.PASSMAIL}`
    },
});

async function Mail() {
                    let info = await transporter.sendMail({
                        from: '"SocialSound" <socialsound.web@gmail.com>',
                        to: email,
                        subject: "Welcome!",
                        html: `<h1>Welcome to SocialSound</h1>
                <a href="https://final-project-sable-two.vercel.app/"><img alt="SocialSound" width="200" height="200" src='cid:logo'/></a>`,
                        attachments: [
                            {
                                filename: "logoiconbg.png",
                                path: `${__dirname}/../../Mailer/Images/logoiconbg.png`,
                                cid: "logo",
                            },
                        ],
                    });
        
                    console.log("Message sent: %s", info.messageId);
                }
        
                Mail().catch(console.error); 

export default transporter */