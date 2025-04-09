import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import emailjs from "@emailjs/browser";

const servicesList = [
  "Facade Cleaning Services",
  "Window Cleaning Services",
  "Rope Access Services",
  "Villa / Apartment Window Cleaning",
  "Solar Panel Cleaning",
  "Pest Control Services",
  "Water Tank Cleaning",
  "Event Cleaning",
  "Waste Management Services",
];

function Contact({ open, handleClose }) {
  const initialFormState = {
    name: "",
    email: "",
    service: null,
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successDialog, setSuccessDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleServiceChange = (_, value) => {
    setFormData({ ...formData, service: value });
    setErrors({ ...errors, service: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const templateParams = {
      to_name: formData.name,
      from_name: formData.email,
      from_service: formData.service,
      message: formData.message,
      from_number: formData.phone,
    };

    emailjs
      .send("service_0xpo6ab", "template_go3j1mj", templateParams, "mfYnniRros4AkGI1W")
      .then(() => {
        setFormData(initialFormState);
        setErrors({});
        handleClose();
        setSuccessDialog(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent dividers>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="dense" error={!!errors.name} helperText={errors.name} />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="dense" error={!!errors.email} helperText={errors.email} />
          <Autocomplete options={servicesList} value={formData.service} onChange={handleServiceChange} renderInput={(params) => (
            <TextField {...params} label="Services" margin="dense" fullWidth error={!!errors.service} helperText={errors.service} />
          )} />
          <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} margin="dense" multiline rows={4} error={!!errors.message} helperText={errors.message} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" sx={{ color: "black", backgroundColor: "#ff5202", borderRadius: "20px" }}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ color: "black", backgroundColor: "#ff5202", borderRadius: "20px" }}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={successDialog} onClose={() => setSuccessDialog(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: "10px", fontSize: '30px' }}>
          <CheckCircleOutlineIcon sx={{ color: "green", fontSize: '30px' }} /> Success
        </DialogTitle>
        <DialogContent dividers>
          Your message has been sent successfully. We will contact you soon!
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccessDialog(false)} variant="contained" sx={{ color: "black", backgroundColor: "#ff5202", borderRadius: "20px" }}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Contact;