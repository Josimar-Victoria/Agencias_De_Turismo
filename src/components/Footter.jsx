/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import { FaFacebook, FaGithub, FaGooglePlus, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footter = () => {

        return (
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.</p>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#!">Link 1</Link></li>
                                <li><Link to="#!">Link 2</Link></li>
                                <li><Link to="#!">Link 3</Link></li>
                                <li><Link to="#!">Link 4</Link></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#!">Link 1</Link></li>
                                <li><Link to="#!">Link 2</Link></li>
                                <li><Link to="#!">Link 3</Link></li>
                                <li><Link to="#!">Link 4</Link></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#!">Link 1</Link></li>
                                <li><Link to="#!">Link 2</Link></li>
                                <li><Link to="#!">Link 3</Link></li>
                                <li><Link to="#!">Link 4</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"><a href="#" className="btn btn-danger btn-rounded">Sign up!</a></li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><Link to='#!' className="btn-floating btn-sm btn-fb mx-1"><FaFacebook/></Link></li>
                        <li className="list-inline-item"><Link to='#!' className="btn-floating btn-sm btn-tw mx-1"><FaGithub/></Link></li>
                        <li className="list-inline-item"><Link to='#!' className="btn-floating btn-sm btn-gplus mx-1"><FaGooglePlus/></Link></li>
                        <li className="list-inline-item"><Link to='#!' className="btn-floating btn-sm btn-li mx-1"><FaInstagram/></Link></li>
                        <li className="list-inline-item"><Link to='#!' className="btn-floating btn-sm btn-dribbble mx-1"><FaLinkedinIn/></Link></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    
}