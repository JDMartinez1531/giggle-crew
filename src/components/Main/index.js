import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./main.css";

function Main() {
	return (
		<Container fluid className="main">
			<Row>
				<Col className="header-col">
					<h1 className="header">
						Add "wow" factor entertainment to your next event
					</h1>
				</Col>
			</Row>
			<Row>
				<Col className="cont-btn">
					<Button>Contact</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Main;
