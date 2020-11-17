import React from "react";
import "./footer.css";
import Nav from "react-bootstrap/Nav";
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const facebookUrl = "https://www.facebook.com/sillysparklesclown";
const phone = "tel:+5128091305";
const email = "mailto:regina@gigglecrew.com";

function Footer() {
	return (
		<Nav className="footer">
			<Nav className="footer-icons">
				<Nav.Item className="footer-rows">
					<Nav.Link href={facebookUrl}>
						<FaFacebook />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item className="footer-rows">
					<Nav.Link href={phone}>
						<FaPhoneAlt />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item className="footer-rows">
					<Nav.Link href={email}>
						<AiOutlineMail />
					</Nav.Link>
				</Nav.Item>
			</Nav>

			<Nav className="footer-contact">
				<p>Phone: 512.809.1305 | Email: Regina@gigglecrew.com</p>
				<p>Copyright © 2020 Giggle Crew. All rights reserved</p>
			</Nav>
		</Nav>
	);
}

export default Footer;
