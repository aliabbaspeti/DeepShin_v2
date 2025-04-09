import React from 'react';
// import { NavLink } from 'react-router-dom';
import Contact from "../Pages/Contact";

const services = [
    {
        count: 1,
        title: `Facade Cleaning`,
        icon: require('./../../images/icon/crane-1.png'),
        description: '',
    },
    {
        count: 2,
        title: 'Window Cleaning',
        icon: require('./../../images/icon/renovation.png'),
        description: '',
    },
    {
        count: 3,
        title: 'Maintenance Services',
        icon: require('./../../images/icon/toolbox.png'),
        description: '',
    },
    {
        count: 4,
        title: 'Manpower Services',
        icon: require('./../../images/icon/compass.png'),
        description: '',
    },
    // {
    //     count: 5,
    //     title: 'Pressure Washing Services',
    //     icon: require('./../../images/icon/compass.png'),
    //     description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    // }
];

var img1 = require("./../../images/background/ptn-1.png");

class Specialization4 extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
          showContactModal: false, // Controls modal visibility
        };
      }

  handleContact = () => {
    this.setState({ showContactModal: true });
  };

  handleClose = () => {
    this.setState({ showContactModal: false });
  };

  render() {
    return (
      <>
        <div
          className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">Our</span>{" "}
                    Specialization
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-3 col-sm-6" key={index}>
                    <div className="mt-icon-box-wraper m-b30">
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                        <span className="icon-count-number">{item.count}</span>
                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                          <span className="icon-cell">
                            <img src={item.icon} alt="" />
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="mt-tilte m-b25">{item.title}</h4>
                          <p>{item.description}</p>
                          {/* <NavLink to={"/services"} className="site-button-link" data-hover="Book Now">Book Now <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                          <p
                            className="site-button-link"
                            data-hover="Book Now"
                            onClick={this.handleContact}
                            style={{
                              cursor: "pointer",
                              color: "black",
                              transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.color = "#ff6702")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.color = "black")
                            }
                          >
                            Book Now{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Contact
          open={this.state.showContactModal}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default Specialization4;