import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={require('./../../images/s-1.png')} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0">"Pride in our work, delivering unmatched Quality and Professionalism.</h3>
                                            <p>With a focus on quality, reliability, and professionalism, we ensure your spaces are spotless, functional, and well-maintained. Trust us to bring shine and comfort to your home or business.</p>
                                            <div className="call-for-quote-outer">
                                                <div className="call-quote">
                                                    <span>Call For a Quote:</span>
                                                    <h4>(+971) 54 445 4881</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"https://wa.me/971544454881"} className="site-button-secondry btn-effect">Contact us via WhatsApp</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutCompany;