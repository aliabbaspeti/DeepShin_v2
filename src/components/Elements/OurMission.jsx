import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

var img1 = require("./../../images/mission-baner.jpg");
var img2 = require("./../../images/background/bg-4.png");
var img3 = require("./../../images/background/bg-site.png");
var img4 = require("./../../images/mission.jpg");

class OurMission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        email: "",
        phone: "",
        message: "",
      },
      errors: {},
      successDialog: false,
      errorDialog: false,
      dialogMessage: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
      errors: { ...prevState.errors, [name]: "" },
    }));
  };

  validateForm = () => {
    const { formData } = this.state;
    let errors = {};

    if (!formData.username.trim()) errors.username = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      this.setState({
        errorDialog: true,
        dialogMessage: "Please fill in all required fields correctly.",
      });
      return;
    }

    const { formData } = this.state;
    const templateParams = {
      to_name: formData.username,
      from_name: formData.email,
      from_number: formData.phone,
      message: formData.message,
    };

    emailjs
      .send("service_0xpo6ab", "template_go3j1mj", templateParams, "mfYnniRros4AkGI1W")
      .then(() => {
        this.setState({
          formData: { username: "", email: "", phone: "", message: "" },
          successDialog: true,
          dialogMessage: "Your message has been sent successfully!",
        });
      })
      .catch(() => {
        this.setState({
          errorDialog: true,
          dialogMessage: "Failed to send email. Please try again later.",
        });
      });
  };

  closeDialog = () => {
    this.setState({ successDialog: false, errorDialog: false, dialogMessage: "" });
  };

  render() {
    // const { formData, errors, successDialog, errorDialog, dialogMessage } = this.state;
    const { formData, errors, successDialog, errorDialog, dialogMessage } = this.state;
    const errorMessage = errorDialog ? dialogMessage : "";
    const successMessage = successDialog ? dialogMessage : "";
    return (
      <>
      <Dialog open={errorDialog || successDialog} onClose={this.closeDialog} fullWidth maxWidth="xs">
                <DialogTitle sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "30px" }}>
                  <CheckCircleOutlineIcon sx={{ color: errorDialog ? "red" : "green", fontSize: "30px" }} />
                  {errorDialog ? "Error" : "Success"}
                </DialogTitle>
                <DialogContent dividers>{dialogMessage}</DialogContent>
                <DialogActions>
                  <Button onClick={this.closeDialog} variant="contained" sx={{ color: "black", backgroundColor: errorDialog ? "#ff5202" : "#4caf50", borderRadius: "20px" }}>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
      
        <div
          className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
          style={{ backgroundImage: `url(${img1}), url(${img2})` }}
        >
          <div className="section-content">
            <div className="container">
              {/* TITLE START */}
              <div className="section-head">
                <div className="mt-separator-outer separator-center">
                  <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">Our</span> Mission
                    </h2>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div
                    className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                    style={{ backgroundImage: `url(${img3})` }}
                  >
                    <h3 className="m-t0">
                      <span className="font-weight-100">Mission to serve</span>
                      <br /> what we serve
                    </h3>
                    <p>
                      With professionalism and care, we've welcomed every challenge, resolving them with a smile and delivering exceptional service to our clients.
                    </p>
                    <ul className="list-angle-right anchor-line">
                      <li><NavLink to={"/services"}>Post Cleaning</NavLink></li>
                      <li><NavLink to={"/services"}>Building Maintenance</NavLink></li>
                      <li><NavLink to={"/services"}>Manpower Service</NavLink></li>
                      <li><NavLink to={"/services"}>Office Cleaning</NavLink></li>
                      <li><NavLink to={"/services"}>Maintenance Services</NavLink></li>
                    </ul>
                    <div className="text-right">
                      <NavLink to="/about" className="site-button-link" data-hover="Read More">
                        Read More <i className="fa fa-angle-right arrow-animation" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: `url(${img4})` }} />
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="contact-home1-left bg-dark p-a30 m-b0">
                    <h3 className="text-white m-t0">
                      <span className="font-weight-100">Get In</span> Touch
                    </h3>
                    <form className="cons-contact-form2 form-transparent" onSubmit={this.handleSubmit}>
                      {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      {successMessage && <p className="text-success">{successMessage}</p>}

                      <div className="input input-animate">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="username"
                          id="name"
                          value={formData.username}
                          onChange={this.handleChange}
                        />
                        {errors.username && <p className="text-danger">{errors.username}</p>}
                        <span className="spin" />
                      </div>

                      <div className="input input-animate">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={this.handleChange}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                        <span className="spin" />
                      </div>

                      <div className="input input-animate">
                        <label htmlFor="Phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="Phone"
                          value={formData.phone}
                          onChange={this.handleChange}
                        />
                        <span className="spin" />
                      </div>

                      <div className="input input-animate">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={this.handleChange}
                        />
                        {errors.message && <p className="text-danger">{errors.message}</p>}
                        <span className="spin" />
                      </div>

                      <div className="text-center p-t10">
                        <button type="submit" className="site-button btn-effect ">
                          Submit Nows
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>Our Mission</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurMission;