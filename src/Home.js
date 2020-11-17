import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://ii2.pepperfry.com/media/wysiwyg/banners/home-wfh-section-image-2x-new.jpg"
        alt="homepage"
      />

      <Contact />
    </div>
  );
}

export default Home;
