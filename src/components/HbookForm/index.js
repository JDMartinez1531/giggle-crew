import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./HbookForm.css";

function HbookForm() {
	(function (h, b, s, n, i, p, e, t) {
		h._HB_ = h._HB_ || {};
		h._HB_.pid = i;
		t = b.createElement(s);
		t.type = "text/javascript";
		t.async = !0;
		t.src = n;
		e = b.getElementsByTagName(s)[0];
		e.parentNode.insertBefore(t, e);
	})(
		window,
		document,
		"script",
		"https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js",
		"5f615cb6f924250298c8bef0"
	);
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h2 className="contactH2" >Want instant pricing?</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3 className="contactH3">
							Get a quote for your event entertainment in seconds.
						</h3>
					</Col>
				</Row>
			</Container>
			<div class="hb-p-5f615cb6f924250298c8bef0-2"></div>
			<img
				height="1"
				width="1"
				style={{ display: "none" }}
				src="https://www.honeybook.com/p.png?pid=5f615cb6f924250298c8bef0"
				alt="Honeybook Form"
			/>
		</>
	);
}

export default HbookForm;
