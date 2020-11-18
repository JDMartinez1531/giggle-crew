import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./main.css";
import { Link } from "react-router-dom";

function Main() {
	return (
		<Container fluid className="main">
			<Row>
				<Col className="header-col">
          <div className="text-box">
          <h1 className="header">
						Add "wow" factor entertainment to your next event
					</h1>
          </div>
					
				</Col>
			</Row>
			<Row>
				<Col className="cont-btn">
					<Link to="/hbookform"><Button className="contact-btn">Contact</Button></Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Main;
