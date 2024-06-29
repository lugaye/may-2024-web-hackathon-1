const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

const { EMAIL, EMAIL_PASSWORD } = process.env;

// Create a Nodemailer transporter
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: EMAIL,
		pass: EMAIL_PASSWORD,
	},
});

// Route to send email
router.post("/sendMail", async (req, res) => {
	try {
		const timestamp = new Date().toLocaleString("en-US", {
			timeZone: "Africa/Nairobi",
		});

		const { senderName, senderEmail, message, subject } = req.body;

		// Mail options for the email to be sent
		const mailOptions = {
			from: senderEmail,
			to: EMAIL,
			subject: `${subject} from ${senderName} (${senderEmail})` || "No subject",
			text: message,
			html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Email</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
              background-color: rgb(18, 27, 48);
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: rgb(18, 27, 48);
            }
            /* Add your additional styles here */
          </style>
        </head>
        <body>
          <table class="container">
            <tr>
              <td style="text-align: center; width: 50%; padding: 8px">
                <img
				src="https://th.bing.com/th/id/OIP.dO84tDNGord9OlwEpZMntgHaHa?rs=1&pid=ImgDetMain"
                  alt="Company Logo"
                  style="
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #ffc107;
                    padding: 5px;
                  "
                />
              </td>
              <td style="text-align: left; vertical-align: center; padding-left: 8px">
                <!-- Replace with your company information -->
                <div style="color: white; font-size: 20px; font-weight: 600; margin-bottom: 10px">
                  Victor Kipkorir Kirui
                </div>
                <div style="color: #fff; font-size: 12px; font-weight: 600">
                  +254 716 404 137
                </div>
                <div style="color: #64ffda; font-size: 16px; font-weight: 600">
                  <span style="color: #ffc107; font-size: 14px; font-weight: 600">CEO</span> OPTISOFT
                </div>
                <br />
                <!-- Replace with your social media links -->
                <a href="https://www.linkedin.com/in/victor-kirui-193aa4222/" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                    alt="LinkedIn"
                    style="width: 30px; height: 30px"
                  />
                </a>
                <a href="https://github.com/Techsupport254" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/github.png"
                    alt="Github"
                    style="width: 30px; height: 30px"
                  />
                </a>
                <a href="https://www.instagram.com/quaint_algorithm/" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                    alt="Instagram"
                    style="width: 30px; height: 30px; border-radius: 50%"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 12px; border: 1px solid #888888; border-radius: 5px; margin-bottom: 16px">
                <h3 style="color: white; font-size: 12px; font-weight: 600; margin: 16px 0">
                  ${subject}
                  <p style="font-size: 12px; color: #ffc107; font-weight: 600">
                    ${senderName} <span style="color: #888888; font-size: 12px"> ${senderEmail}</span>
                  </p>
                </h3>
                <p style="color: #888888; font-size: 14px; padding: 5px">
                  ${message}
                </p>
                <br />
                <span style="color: #888888; font-size: 14px">Best Regards,</span>
                <p style="color: #888888; font-size: 14px">
                  ${senderName}<br />
                  <span id="timestamp" style="color: #ffc107; font-size: 12px; font-weight: 500">${timestamp}</span>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
		};

		// Send mail with defined transport object
		const result = await transporter.sendMail(mailOptions);

		// Confirmation email to sender
		const senderMailOptions = {
			from: EMAIL,
			to: senderEmail,
			subject: `Thank you for contacting me, ${senderName}!`,
			text: `I will get back to you as soon as possible.`,
			html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Email Confirmation</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: sans-serif;
              background-color: rgb(18, 27, 48);
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: rgb(18, 27, 48);
            }
            /* Add your additional styles here */
          </style>
        </head>
        <body>
          <table class="container">
            <tr>
              <td style="text-align: center; width: 50%; padding: 8px">
                <!-- Replace with your company logo -->
                <img
					src="https://th.bing.com/th/id/OIP.dO84tDNGord9OlwEpZMntgHaHa?rs=1&pid=ImgDetMain"
                  alt="Company Logo"
                  style="
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #ffc107;
                    padding: 5px;
                  "
                />
              </td>
              <td style="text-align: left; vertical-align: center; padding-left: 8px">
                <!-- Replace with your company information -->
                <div style="color: white; font-size: 20px; font-weight: 600; margin-bottom: 10px">
                  Victor Kipkorir Kirui
                </div>
                <div style="color: #fff; font-size: 12px; font-weight: 600">
                  +254 716 404 137
                </div>
                <div style="color: #64ffda; font-size: 16px; font-weight: 600">
                  <span style="color: #ffc107; font-size: 14px; font-weight: 600">CEO</span> OPTISOFT
                </div>
                <br />
                <!-- Replace with your social media links -->
                <a href="https://www.linkedin.com/in/victor-kirui-193aa4222/" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                    alt="LinkedIn"
                    style="width: 30px; height: 30px"
                  />
                </a>
                <a href="https://github.com/Techsupport254" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/github.png"
                    alt="Github"
                    style="width: 30px; height: 30px"
                  />
                </a>
                <a href="https://www.instagram.com/quaint_algorithm/" target="_blank" style="margin-right: 10px">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                    alt="Instagram"
                    style="width: 30px; height: 30px; border-radius: 50%"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 12px; border: 1px solid #888888; border-radius: 5px; margin-bottom: 16px">
                <h3 style="color: white; font-size: 12px; font-weight: 600; margin: 16px 0">
                  Thank you for contacting me, ${senderName}!
                </h3>
                <p style="color: #888888; font-size: 14px; padding: 5px">
                  I will get back to you as soon as possible.
                </p>
                <br />
                <span style="color: #888888; font-size: 14px">Best Regards,</span>
                <p style="color: #888888; font-size: 14px">
                  Victor Kipkorir Kirui
                  <br />
                  <span id="timestamp" style="color: #ffc107; font-size: 12px; font-weight: 500">${timestamp}</span>
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
		};

		// Send confirmation email to sender
		await transporter.sendMail(senderMailOptions);

		console.log("Email sent successfully");
		return res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email: ", error);
		return res.status(500).json({ message: "Failed to send email" });
	}
});

module.exports = router;
