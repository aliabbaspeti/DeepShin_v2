import React from 'react';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class AboutSummary extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">About</span> Summary</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic4.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2000</h4>
                                        <h4 className="m-b20">Opening First Office</h4>
                                        <p>We started with a small office, offering high-quality services that quickly earned the trust of our clients.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic7.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2003</h4>
                                        <h4 className="m-b20">New Licensed Workers</h4>
                                        <p>Expanded our team with skilled and licensed professionals to meet growing demand and maintain service excellence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic6.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2005</h4>
                                        <h4 className="m-b20">Countrywide Brand Fame</h4>
                                        <p>Our reputation grew, becoming a trusted name for cleaning, maintenance, and event management services across the country.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic5.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2023</h4>
                                        <h4 className="m-b20">Top Award Winning</h4>
                                        <p>Recognized as a top service provider, winning prestigious awards for outstanding customer service and commitment to quality. </p>
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

export default AboutSummary;