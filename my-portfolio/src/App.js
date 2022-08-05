import React from "react";
import ReactDOM from "react-dom";
import WorkProfile from './ExperienceProfile/WorkProfile';
import { download, downloadByFileReader, downloadByOctetStream } from "./Download";

import './root/css/mdi/css/materialdesignicons.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Alert, Col, Row } from 'react-bootstrap';

function App() {
  const downloadResume = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("myResume").value], {
      type: "text/plain;charset=utf-8}"
    });
    element.href = "./root/files/Resume_PrasannaKumarUIUX.pdf";
    element.download = "Resume_PrasannaKumarUIUX.pdf";
    element.click();
  };
  return (
      <Container fluid>
          <Row>
            <Col xl={4} className='leftPanel p-3'>
              <div className="w-100">
                <h4 className='txtPrimary'>R Prasanna Kumar</h4>
                <span className="f-12 font-weight-bold d-block text-uppercase text-white-50">UI UX Developer</span>
                <span className="f-12 font-weight-bold pe-2 mt-3">Current Organization:</span>
                <p className="mb-1"><span className="f-12 text-white-50">Softenger India Pvt Ltd</span> | <a className="f-12 text-info text-decoration-none" href="https://www.softenger.com/">www.Softenger.com</a></p>
              </div>
              <div className="w-100 mt-4">
                <p className='mb-1 font-weight-bold f-16 txtPrimary'>Technical Skills:</p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">HTML</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">CSS</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Bootstrap(5, 4, 3)</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Javascript</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">JQuery</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">React JS</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">SQL</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">XML, XSLT</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Dot Net</span>
                </p>
              </div>
              <div className="w-100 mt-3">
                <p className='text-white mb-1 font-weight-bold f-16'>Tools</p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Git Hub</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Tortoise SVN</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Jira</span>
                </p>
              </div>
              <div className="w-100 mt-3">
                <p className='text-white mb-1 font-weight-bold f-16'>Frameworks & Plug-ins</p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Apex Charts Jquery & React</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Drag & Drop Widgets Jquery & React</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">DataTables Jquery & React</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Font Awesome & MDI</span>
                </p>
                <p className="text-white mb-1 d-inline-flex justify-content-center align-items-center">
                  <i className="mdi mdi-check-circle mt-1"></i>
                  <span className="px-2 f-12">Owl Carousel</span>
                </p>
              </div>
            </Col>
            <Col xl={8} className='rightPanel p-3'>
              <div className="w-100">
                <h4 className="text-center font-weight-bold txtPrimary">ABOUT ME</h4>
                <p className="text-white-50">Hello all Welcome to my Portfolio! I am Aspiring for a Senior UI developer with opportunity to work in an organization to work on latest technologies in
UI development and master myself in User experience designing.</p>
              </div>
              <div className="w-100">
                <button id="myResume" onClick={() => downloadByFileReader("Resume_PrasannaKumarUIUX.pdf", "/Resume_PrasannaKumarUIUX.pdf")} className="btn btn-outline-info rounded-1 d-inline-flex justify-content-center align-items-center"><span className="mdi mdi-download px-2 mt-1"></span>Download Resume</button>
              </div>
              <div className="w-100 my-5">
                  <WorkProfile />
              </div>
            </Col>
          </Row>
      </Container>
  );
}

export default App;
