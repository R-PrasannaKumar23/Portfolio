import React from "react";
import ReactDOM from "react-dom";
import { Container, Button, Alert, Col, Row } from 'react-bootstrap';

class YaliInfo extends React.Component {
    render() {
      return (
        <Row>
            <Col xl={12}>
                <ul className="text-black f-14">
                    <li className="mb-2">Core developer in UI for the client - <a href="https:www.eduvision.tv">www.eduvision.tv</a></li>
                    <li className="mb-2">Played a main role in implementing responsive UI without using third party tools throughout the
application.</li>
                    <li className="mb-2">Key role in implementing validations and testing the UI throughout the applications and modifying
the necessary validations using JavaScript and JQuery according to the client’s requirements.</li>
                    <li className="mb-2">Appreciated for providing new ideas and contributing for new features during the development.</li>
                </ul>
            </Col>
        </Row>
      );
    }
  }
export default YaliInfo;
  