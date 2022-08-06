import React from "react";
import "../Styles/IntroPage.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const cv = require("../StaticAssets/CV_2022-08-04_Abd El Karim_Aouichaoui.pdf");
const mainPhoto = require("../StaticAssets/893590A3-923C-4152-8B8D-982329F4DCA9.jpeg");
const IntroPage = () => {
  return (
    <div className="introPage">
      <div className="information">
      
        <div className="contact">
        <div  >
          <h1 className="name">Karim Aouichaoui</h1>
          <h2>Pizzaïolo</h2>
        </div>
          <div className="data" >
            <h3>Phone</h3>
            <p>92513703</p>
          </div>
          <div className="data" >
            <h3>Email</h3>
            <p>karimronaldosat@gmail.com</p>
          </div>
          <div className="data" >
            <h3>Address</h3>
            <p>Hammamet, Cite Riadhe 8050</p>
          </div>
          <div className="socials" >
            <LinkedInIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
          </div>
        </div>
      </div>
      <div className="photo-download-cv">
        <d>
          <a className="download_btn" href={cv} download>
            Click to download the CV
          </a>
        </d>
        <img className="mainphoto" src={mainPhoto} alt="" />
      </div>
    </div>
  );
};

export default IntroPage;
