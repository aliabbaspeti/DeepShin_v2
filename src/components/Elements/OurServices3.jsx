import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "../Pages/Contact";

const services = [
  {
    count: 1,
    title: "Cleaning Service",
    flaticon: "flaticon-city",
    description:
      "Expert cleaning for homes and offices, eco-friendly and hassle-free.",
  },
  {
    count: 2,
    title: "Event Cleaning",
    flaticon: "flaticon-paint",
    description:
      "Professional event cleaning, any size, any venue. We restore your space quickly and efficiently.",
  },
  {
    count: 3,
    title: "Maintenance",
    flaticon: "flaticon-crane",
    description:
      "Provides comprehensive maintenance services, including electrical and AC maintenance, ensuring your space is clean, functional, and comfortable.",
  },
  {
    count: 4,
    title: "Manpower Supply",
    flaticon: "flaticon-decorating",
    description:
      "Delivers skilled manpower services for maintenance, cleaning, electrical, and AC needs, ensuring professional.",
  },
  {
    count: 5,
    title: "Pest Control Services",
    flaticon: "flaticon-chart",
    description:
      "Effective and eco-friendly pest control services to keep your home or business free from pests and ensure a safe, healthy environment.",
  },
  {
    count: 6,
    title: "Building Cleaning",
    flaticon: "flaticon-sketch",
    description:
      "Top-quality building cleaning services, ensuring pristine and well-maintained spaces for both residential and commercial properties",
  },
  {
    count: 7,
    title: "Window Cleaning",
    flaticon: "flaticon-builder",
    description:
      "Sparkling windows guaranteed! Professional window cleaning with streak-free results. Safe, eco-friendly, and flexible scheduling.",
  },
  {
    count: 8,
    title: "Water Tank Cleaning",
    flaticon: "flaticon-drill",
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 9,
    title: "Duct Cleaning",
    flaticon: "flaticon-art-and-design",
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
];

var img1 = require("./../../images/background/bg-5.png");
var img2 = require("./../../images/background/line.png");

class OurServices3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactModal: false, // Controls modal visibility
    };
  }
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }
    loadScript("./assets/js/masonary.js");
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
          className="section-full p-t80 p-b50 bg-white mobile-page-padding"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">All</span>{" "}
                    Services
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                {services.map((item, index) => (
                  <div key={index} className="col-md-4 col-sm-6">
                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                      <div
                        className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving"
                        style={{ backgroundImage: "url(" + img2 + ")" }}
                      >
                        <span className="icon-cell text-secondry">
                          <i className={item.flaticon} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                          {item.title}
                        </h4>
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
                          onMouseLeave={(e) => (e.target.style.color = "black")}
                        >
                          Book Now{" "}
                          <i className="fa fa-angle-right arrow-animation" />
                        </p>
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

export default OurServices3;
