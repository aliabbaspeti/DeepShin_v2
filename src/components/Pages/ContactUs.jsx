import React, { useState } from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";
import GoogleMapReact from "google-map-react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

var bnrimg = require("./../../images/banner/contactus_banner.jpg");

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const [errorDialog, setErrorDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("Form submitted successfully!");

  const initialFormState = {
    name: "",
    email: "",
    message: "",
    service: "",
    phone: "",
  };

  const defaultProps = {
    center: { lat: 34.07328, lng: -118.25141 },
    zoom: 12,
  };

  // State to store form data
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    // if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields correctly.");
      setErrorDialog(true);
      return;
    }

    const templateParams = {
      to_name: formData.name,
      from_name: formData.email,
      from_number: formData.phone,
      message: formData.message,
    };

    console.log("Sending email with:", templateParams);

    emailjs
      .send("service_0xpo6ab", "template_go3j1mj", templateParams, "mfYnniRros4AkGI1W")
      .then((response) => {
        setFormData(initialFormState);
        setErrors({});
        setSuccessDialog(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setErrorMessage("Failed to send email. Please try again later.");
        setErrorDialog(true);
      });
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Putting a plan to action, to assure your satisfaction!"
          pagename="Contact Us"
          bgimage={bnrimg}
        />

        {/* SECTION CONTENT START */}
        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <form
                    className="contact-form cons-contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-one m-b30">
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one">
                              <span className="font-weight-300 text-primary">
                                Getss
                              </span>{" "}
                              In touch
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          id="Phone"
                          required
                          className="form-control"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />

                        <span className="spin" />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={4}
                          className="form-control"
                          required
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-right">
                        <button
                          name="submit"
                          type="submit"
                          className="site-button btn-effect"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info m-b30">
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-uppercase sep-line-one">
                            <span className="font-weight-300 text-primary">
                              Contact
                            </span>{" "}
                            Info
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="bg-dark p-a20 text-white">
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Phone number</h5>
                          <p>(+971) 544 454 881</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            Email address
                          </h5>
                          <p>info@deepshine.ae</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left">
                        <div className="icon-xs">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Address info</h5>
                          <p>
                            Office No 5 Naseer Lootah Building, Airport Road
                            Cargo Village, Dubai - UAE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gmap-outline">
              <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={34.07328}
                    lng={-118.25141}
                    text={<i className="fa fa-map-marker" />}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
        
        <Dialog open={errorDialog || successDialog} onClose={() => { setErrorDialog(false); setSuccessDialog(false); }} fullWidth maxWidth="xs">
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "30px" }}>
          <CheckCircleOutlineIcon sx={{ color: errorDialog ? "red" : "green", fontSize: "30px" }} />
          {errorDialog ? "Error" : "Success"}
        </DialogTitle>
        <DialogContent dividers>{errorDialog ? errorMessage : successMessage}</DialogContent>
        <DialogActions>
          <Button onClick={() => { setErrorDialog(false); setSuccessDialog(false); }} variant="contained" sx={{ color: "black", backgroundColor: errorDialog ? "#ff5202" : "#4caf50", borderRadius: "20px" }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
