import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div
      style={{
        marginTop: "100px",
        minHeight: "500px",
        position: "absolute",
        top: "100vh",
      }}
    >
      <center>
        <h4>Contact Us</h4>
        <h6>Mobile No</h6>
        <h6>Agra, UP, India</h6>
      </center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Contact;
