import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-5.png');

class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic1.jpg')} alt=""/>
                                        <div className="figcaption">
                                            <h4>Fascade Cleaning</h4>
                                            {/* <p>Engineering your dreams with us.</p> */}
                                            <NavLink to="/services" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Windows Cleaning</h4>
                                            {/* <p>Life is Architecture.</p> */}
                                            <NavLink to="/services" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic3.jpg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Maintenance</h4>
                                            {/* <p>Dazzling Design</p> */}
                                            <NavLink to="/services" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                                    <div className="mt-box our-speciallization-content">
                                        <h3 className="m-t0"><span className="font-weight-100">Making it Cleaner</span> <br /> professional services.</h3>
                                        <p>When it comes to your home, don’t settle for less, trust the best in cleanliness. Making your space spotless and fresh. </p>
                                        <NavLink to="/services"  className="site-button btn-effect">View All</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
                        <strong>Welcome</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization;