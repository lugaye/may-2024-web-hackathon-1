const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// OAuth2
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// send mail
router.post("/sendMail", async (req, res) => {
	try {
		const timestamp = new Date().toLocaleString("en-US", {
			timeZone: "Africa/Nairobi",
		});

		const { senderName, senderEmail, message, subject } = req.body;

		const accessToken = await oAuth2Client.getAccessToken();

		const transport = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: process.env.EMAIL,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
			},
		});

		const mailOptions = {
			from: senderEmail,
			to: process.env.EMAIL,
			subject: `${subject} from ${senderName} (${senderEmail})` || "No subject",
			text: message,
			html: `
			<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Email</title>
	</head>
	<body
		style="
			margin: 0;
			padding: 0;
			font-family: sans-serif;
			background-color: rgb(18, 27, 48);
		"
	>
		<table
			class="container"
			style="
				width: 100%;
				max-width: 600px;
				margin: 0 auto;
				background-color: rgb(18, 27, 48);
			"
		>
			<tr>
				<td style="text-align: center; width: 50%; padding: 8px">
					<img
						src="https://lh3.googleusercontent.com/pw/AIL4fc-3qlxKjqzIBL20Bm3fls-9kGApGOKiXdOwW1hzppWA0gW8z7tEM8MvFA8d6Cc5b23Fu5lvZGEkVAD3PBJzR053ay-7c7AN-N2qEehsnp7e0dTJnWTy0FjxeIqtF766QRFyJ6-ah-GjgfGSEgTMdOTOZZrViSOEis7Jai6Jcx5jfZZNlWmxTCsXBL1yTzbbb3XWMyI9KNQj0HcQpWERAGIofLADn2ag2uopBUQqpJPtMau-Wbul3jHo-VWjngR6yJ7Nbb5SkcT7JtihjUacTntbZ7QT_Fo35M8PdBS4F80xf9X50I2FftgVIoEy0v-Jw78eCAMHCnvtn_1_vKD7wjtAdvDNM7qLBR3A9AFvGpktz8P3jDjJqMoQhos3KLKheR8TAbi44YNv_32ZBaBhjrloCk3_Zg3KZbvIXmpxno_qKUXVuL7vt88eAdON4rGe1lTvFKfZrF6dN190gp7cXCIz8q5macTXdvWdBCDZES7S58GMln1g8P0LyvFRL5WKonzQ05qXfH2Z8AezHTZ9550tdrABDqSA3gWhpfESv5soPI3KGm_8ZD2Va6E7TZ1ARrIIB7H_jflvZJ2UfPX5xoa2VkrC4BqVyxzM1gF-w3hwPfbeGPGWnYNaBH5vhiJ9KYMDrJ3e9jbLIPbbjTGdK83FGVyALeQyfAqmUXKplyCgBMGoOoxKfjjr4AMDU7hw-g3ib1pLB35syZfqkCkHJCGLo1UhiTG-tMY4XKF50GZQQINpHDVTAnGebtgT7ZA_jTZntWT1HBC71KiF86G7lOqP-sMWun8qntxGAD789TmqyAHwq-hiBkCAvjoyL6e2XJF-XGOpgSyN5Esd8kmBXGo9VbrzDtKFH41cKkuEkAaMLJROb0y30zH3XzY46gxtP3VofDyzHgB50-ayemTi8A5K2SPJrE7Pa60l3E0HnfH7gjsd43eaUHFyXxMfQr_hAqRZML-zCfUIGAc1gjKd3_fZyMZ7W51T=w959-h959-s-no?authuser=1"
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
					<div
						style="
							color: white;
							font-size: 20px;
							font-weight: 600;
							margin-bottom: 10px;
						"
					>
						Victor Kipkorir Kirui
					</div>
					<div style="color: #fff; font-size: 12px; font-weight: 600">
						+254 716 404 137
					</div>
					<div style="color: #64ffda; font-size: 16px; font-weight: 600">
						<span style="color: #ffc107; font-size: 14px; font-weight: 600"
							>CEO</span
						>
						OPTISOFT
					</div>
					<br />
					<a
						href="https://www.linkedin.com/in/victor-kirui-9b0b3b1a0/"
						target="_blank"
						style="margin-right: 10px"
					>
						<img
							src="https://img.icons8.com/fluent/48/000000/linkedin.png"
							alt="LinkedIn"
							style="width: 30px; height: 30px"
						/>
					</a>
					<a href="" target="_blank" style="margin-right: 10px">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
							style="width: 30px; height: 30px"
						/>
					</a>
					<a
						href="https://www.instagram.com/victor_kirui_/"
						target="_blank"
						style="margin-right: 10px"
					>
						<img
							src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
							alt="Instagram"
							style="width: 30px; height: 30px; border-radius: 50%"
						/>
					</a>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="padding: 12px;border: 1px solid #888888;border-radius: 5px;margin-bottom:16px">
					<h3
						style="
							color: white;
							font-size: 12px;
							font-weight: 600;
							margin: 16px 0;
						"
					>
						${subject}
						<p style="font-size: 12px; color: #ffc107; font-weight: 600">
							${senderName}
							<span
								style="color: #888888; font-size: 12px"
							> ${senderEmail}</span>
						</p>
					</h3>
					<p
						style="
							color: #888888;
							font-size: 14px;
							padding: 5px;
						"
					>
						${message}
					</p>
					<br />
					<span style="color: #888888; font-size: 14px">Best Regards,</span>
					<p style="color: #888888; font-size: 14px">
						${senderName}<br /><span
							id="timestamp"
							style="color: #ffc107; font-size: 12px; font-weight: 500"
							>${timestamp}</span
						>
					</p>
				</td>
			</tr>
		</table>
	</body>
</html>

			`,
		};

		const result = await transport.sendMail(mailOptions);

		const senderMailOptions = {
			from: process.env.EMAIL,
			to: senderEmail,
			subject: `Thank you for contacting me, ${senderName}!`,
			text: `I will get back to you as soon as possible.`,
			html: `
			<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Email</title>
	</head>
	<body
		style="
			margin: 0;
			padding: 0;
			font-family: sans-serif;
			background-color: rgb(18, 27, 48);
		"
	>
		<table
			class="container"
			style="
				width: 100%;
				max-width: 600px;
				margin: 0 auto;
				background-color: rgb(18, 27, 48);
			"
		>
			<tr
			
			>
				<td style="text-align: center;width:50%; padding: 8px;">
					<img
						src="https://lh3.googleusercontent.com/pw/AIL4fc-3qlxKjqzIBL20Bm3fls-9kGApGOKiXdOwW1hzppWA0gW8z7tEM8MvFA8d6Cc5b23Fu5lvZGEkVAD3PBJzR053ay-7c7AN-N2qEehsnp7e0dTJnWTy0FjxeIqtF766QRFyJ6-ah-GjgfGSEgTMdOTOZZrViSOEis7Jai6Jcx5jfZZNlWmxTCsXBL1yTzbbb3XWMyI9KNQj0HcQpWERAGIofLADn2ag2uopBUQqpJPtMau-Wbul3jHo-VWjngR6yJ7Nbb5SkcT7JtihjUacTntbZ7QT_Fo35M8PdBS4F80xf9X50I2FftgVIoEy0v-Jw78eCAMHCnvtn_1_vKD7wjtAdvDNM7qLBR3A9AFvGpktz8P3jDjJqMoQhos3KLKheR8TAbi44YNv_32ZBaBhjrloCk3_Zg3KZbvIXmpxno_qKUXVuL7vt88eAdON4rGe1lTvFKfZrF6dN190gp7cXCIz8q5macTXdvWdBCDZES7S58GMln1g8P0LyvFRL5WKonzQ05qXfH2Z8AezHTZ9550tdrABDqSA3gWhpfESv5soPI3KGm_8ZD2Va6E7TZ1ARrIIB7H_jflvZJ2UfPX5xoa2VkrC4BqVyxzM1gF-w3hwPfbeGPGWnYNaBH5vhiJ9KYMDrJ3e9jbLIPbbjTGdK83FGVyALeQyfAqmUXKplyCgBMGoOoxKfjjr4AMDU7hw-g3ib1pLB35syZfqkCkHJCGLo1UhiTG-tMY4XKF50GZQQINpHDVTAnGebtgT7ZA_jTZntWT1HBC71KiF86G7lOqP-sMWun8qntxGAD789TmqyAHwq-hiBkCAvjoyL6e2XJF-XGOpgSyN5Esd8kmBXGo9VbrzDtKFH41cKkuEkAaMLJROb0y30zH3XzY46gxtP3VofDyzHgB50-ayemTi8A5K2SPJrE7Pa60l3E0HnfH7gjsd43eaUHFyXxMfQr_hAqRZML-zCfUIGAc1gjKd3_fZyMZ7W51T=w959-h959-s-no?authuser=1"
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
				<td
					style="
						text-align: left;
						vertical-align: center;
						padding-left: 8px;
					"
				>
					<div style="color: white; font-size: 20px; font-weight: 600;margin-bottom:10px">
						Victor Kipkorir Kirui
					</div>
					<div style="color: #fff; font-size: 12px; font-weight: 600">
						+254 716 404 137
					</div>
					<div style="color: #64ffda; font-size: 16px; font-weight: 600">
						<span style="color: #ffc107; font-size: 14px; font-weight: 600"
							>CEO</span
						>
						OPTISOFT
					</div>
					<br />
					<a
						href="https://www.linkedin.com/in/victor-kirui-9b0b3b1a0/"
						target="_blank"
						style="margin-right: 10px"
					>
						<img
							src="https://img.icons8.com/fluent/48/000000/linkedin.png"
							alt="LinkedIn"
							style="width: 30px; height: 30px"
						/>
					</a>
					<a href="" target="_blank" style="margin-right: 10px">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
							style="width: 30px; height: 30px"
						/>
					</a>
					<a
						href="https://www.instagram.com/victor_kirui_/"
						target="_blank"
						style="margin-right: 10px"
					>
						<img
							src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
							alt="Instagram"
							style="width: 30px; height: 30px; border-radius: 50%"
						/>
					</a>
				</td>
			</tr>
			<tr>
				<td colspan="2" style="padding: 12px;border: 1px solid #888888;
							border-radius: 5px;">
					<h3
						style="
							color: white;
							font-size: 16px;
							font-weight: 600;
							margin: 16px 0;
						"
					>
						Dear <span style="color: #ffc107; font-weight: 600">${senderName}</span>
					</h3>
					<p style="
							color: #888888;
							font-size: 14px;
							
							padding: 5px;
						">
						Thank you for reaching out to me. I want to personally acknowledge
						the receipt of your message and express my gratitude for your
						communication. Your inquiry is important to me, and I assure you
						that I am giving it my full attention.
						<br /><br />
						Once again, I want to thank you for reaching out to me, and I am
						eager to assist you further. I value your engagement and look
						forward to providing you with the information or support you need.
						Should you have any additional questions or further information to
						share, please feel free to let me know.
					</p>
					<br />
					<span style="color: #888888; font-size: 14px">Best Regards,</span>
					<p style="color: #888888; font-size: 14px">
						Victor Kipkorir Kirui<br />
						<span style="color: #ffc107; font-weight: 600">CEO, </span>
						<span style="color: #64ffda; font-size: 14px; font-weight: 600"
							>OPTISOFT</span
						>
					</p>
				</td>
			</tr>
		</table>
	</body>
</html>

`,
		};

		const senderResult = await transport.sendMail(senderMailOptions);

		return res.status(200).json({
			success: true,
			message: "The message was sent successfully.",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "The message was not sent.",
		});
	}
});

module.exports = router;
