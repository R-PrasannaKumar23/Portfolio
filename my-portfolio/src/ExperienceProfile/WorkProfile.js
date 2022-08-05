import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Button, Alert, Col, Row } from 'react-bootstrap';
import Modal from '../Modal/Modal';

class WorkProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            Amk: false,
            Nautica:false,
            Fuady:false,
            Florescer:false,
            Yali:false,
        };

    }
    selectModal = (info) => {
        this.setState({ modal: !this.state.modal })
    }
    selectAmk = (info) => {
        this.setState({ Amk: !this.state.Amk })
    }
    Nautica = (info) => {
        this.setState({ Nautica: !this.state.Nautica })
    }
    Fuady = (info) => {
        this.setState({ Fuady: !this.state.Fuady })
    }
    Florescer = (info) => {
        this.setState({ Florescer: !this.state.Florescer })
    }
    Yali = (info) => {
        this.setState({ Yali: !this.state.Yali })
    }
    render() {
      return (
          <div className="row m-0">
              <div className="col-xl-12">
              <Modal modalName={'Softenger India Pvt Ltd'} displayModal={this.state.modal} closeModal={this.selectModal} callbackFn={this.refreshData}></Modal>
              <Modal modalName={'Amk Solutions'} displayModal={this.state.Amk} closeModal={this.selectAmk} callbackFn={this.refreshData}></Modal>
              <Modal modalName={'360 Nautica Tech Venture'} displayModal={this.state.Nautica} closeModal={this.Nautica} callbackFn={this.refreshData}></Modal>
              <Modal modalName={'Fuady Technology Solutions'} displayModal={this.state.Fuady} closeModal={this.Fuady} callbackFn={this.refreshData}></Modal>
              <Modal modalName={'Florescer Infotech'} displayModal={this.state.Florescer} closeModal={this.Florescer} callbackFn={this.refreshData}></Modal>
              <Modal modalName={'Yali Infotech'} displayModal={this.state.Yali} closeModal={this.Yali} callbackFn={this.refreshData}></Modal>
                <OwlCarousel className="owl-theme" margin={1} nav>
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">Softenger India Pvt Ltd</p>
                                        <p className="text-white-50 mb-0 f-10">Pune | Jan-2022 | Present </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">Core UI Developer in ESS Corazon project 2.0, developed Front-end application using technology of React and .Net.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none" onClick={this.selectModal}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">Amk Solutions</p>
                                        <p className="text-white-50 mb-0 f-10">Bangalore | Sep-2020 | Jan-2022 </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">Core UI Developer in ESS Corazon project 2.0, developed Front-end application using technology of React and .Net.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none" onClick={this.selectAmk}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">360 Nautica Tech Venture</p>
                                        <p className="text-white-50 mb-0 f-10">Bangalore | Aug-2019 | Aug-2020 </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">Core UI Developer in ESS Corazon project 2.0, developed Front-end application using technology of React and .Net.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none" onClick={this.Nautica}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">Fuady Tech Solutions</p>
                                        <p className="text-white-50 mb-0 f-10">Coimbatore | Sep-2018 | July-2019 </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">Core UI Developer in ESS Corazon project 2.0, developed Front-end application using technology of React and .Net.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none"  onClick={this.Fuady}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">Florescer InfoTech</p>
                                        <p className="text-white-50 mb-0 f-10">Coimbatore | Nov-2016 | Aug-2018 </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">ERP Framework, web development based company involving different clients with ERP SYSTEM handling end to
end business process like, Trading and Manufacturing, Point of Sale, Construction Managements and Supply
Contracts.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none" onClick={this.Florescer}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="item px-3">
                                <div className="card rounded-1">
                                    <div className="card-header bg-dark">
                                        <p className="text-info mb-0 f-14">Yali InfoTech</p>
                                        <p className="text-white-50 mb-0 f-10">Coimbatore | June-2015 | Aug-2016 </p>
                                    </div>
                                    <div class="card-body px-0 pt-2 pb-4">
                                        <p className="text-black f-12 px-2">Video streaming, web development based company majorly working for education and e-learning websites like
in www.eduvision.tv and www.grandstadium.tv where thousands of schools registered here as sub sites. These
websites manage the video contents uploaded by teachers and education institutions across the globe. These
websites also have the functionality of live broadcasting of sports and conferences across the globe.</p>
                                        <p className="text-end mb-0 px-2"><a className="text-primary f-10 text-decoration-none" onClick={this.Yali}>Job Description</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </OwlCarousel>
              </div>
          </div>
      );
    }
  }
export default WorkProfile;
  