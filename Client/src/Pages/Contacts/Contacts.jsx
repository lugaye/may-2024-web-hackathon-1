import React, { useState } from "react";
import "./Contacts.css";
import contact from "../../assets/contact.svg";
import axios from "axios";

const Contacts = () => {
	const [senderName, setSenderName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const senderName = e.target.elements.name.value;
		const senderEmail = e.target.elements.email.value;
		const subject = e.target.elements.subject.value;
		const message = e.target.elements.message.value;

		if (!senderName || !senderEmail || !subject || !message) {
			setError("Please fill in all fields");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}

		setSending(true);

		axios
			.post("http://localhost:4000/api/sendMail", {
				senderName,
				senderEmail,
				subject,
				message,
			})
			.then((res) => {
				setSuccess(res.data.message);
				setSent(true);
				setTimeout(() => {
					setSuccess("");
					setSent(false);
					// Reset form values
					setSenderName("");
					setSenderEmail("");
					setSubject("");
					setMessage("");
				}, 3000);
			})
			.catch((err) => {
				setError(
					err.response?.data?.message ||
						"An error occurred while sending the message."
				);
				setTimeout(() => {
					setError("");
				}, 3000);
			})
			.finally(() => {
				setSending(false);
			});
	};

	return (
		<div className="Main">
			<div className="Container">
				<div className="Title">
					<h1>Contacts</h1>
				</div>
				<div className="ContactsInfo">
					<div className="ContactsLeft">
						<div className="ContactImage">
							<img src={contact} alt="contact" />
						</div>
						<div className="Socials">
							<div className="SocialsTop">
								<div className="ContactRow">
									<i className="fas fa-map-marker-alt"></i>
									<span>00800 Kilimani, Nairobi, Kenya</span>
								</div>
								<div className="ContactRow">
									<i className="fas fa-phone-alt"></i>
									<span
										onClick={() => {
											window.location.href = "tel:+254716404137";
										}}
									>
										+254 716 404 137
									</span>
								</div>
								<div className="ContactRow">
									<i className="fas fa-envelope"></i>
									<span
										onClick={() => {
											window.location.href = "mailto:victorquaint@gmail.com";
										}}
									>
										victorquaint@gmail.com
									</span>
								</div>
							</div>
							<div className="SocialsBottom">
								<a href="" target="_blank" rel="noreferrer">
									<i className="fab fa-facebook"></i>
								</a>
								<a href="" target="_blank" rel="noreferrer">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="" target="_blank" rel="noreferrer">
									<i className="fab fa-twitter"></i>
								</a>
								<a
									href="https://www.linkedin.com/in/victor-kirui-193aa4222/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="ContactsRight">
						<div className="Message">
							<h2>Send a message</h2>

							<form onSubmit={handleSubmit} action="">
								<div className="FormRow">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										name="name"
										placeholder="Name"
										value={senderName}
										onChange={(e) => setSenderName(e.target.value)}
									/>
								</div>
								<div className="FormRow">
									<label htmlFor="email">Email</label>
									<input
										type="text"
										placeholder="Email"
										name="email"
										value={senderEmail}
										onChange={(e) => setSenderEmail(e.target.value)}
									/>
								</div>
								<div className="FormRow">
									<label htmlFor="subject">Subject</label>
									<input
										type="text"
										placeholder="Subject"
										name="subject"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
									/>
								</div>
								<div className="FormRow">
									<label htmlFor="message">Message</label>
									<textarea
										placeholder="Message"
										name="message"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<div className="FormRow">
									<button type="submit">
										{sending ? (
											<>
												<i className="fa-solid fa-circle-notch fa-spin"></i>{" "}
												&nbsp; Sending
											</>
										) : sent ? (
											<>
												<i className="fas fa-check"></i> &nbsp; Sent
											</>
										) : (
											"Send"
										)}
									</button>
								</div>
								{error && <div className="Error">{error}</div>}
								{success && <div className="Success">{success}</div>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
