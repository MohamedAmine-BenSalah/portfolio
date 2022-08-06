import React from "react";
import "../Styles/WorkEx.css";

const pizza1 = require("../StaticAssets/896A285A-2B61-447E-88F6-31071AC41D77.jpeg");
const pizza2 = require("../StaticAssets/3537BEE4-3068-42BE-B7CE-84D84C354974.jpeg");
const pizza3 = require("../StaticAssets/C2732C95-F542-442F-83DA-BB30E958A322.jpeg");
const pizza4 = require("../StaticAssets/4.jpeg");
const WorkExperience = () => {
    return (<div className="main-experience" >
        <div className="work-ex" >
            <h1>Work experience</h1>
            <div className="ex" >
            <h3>Pizzaiolo</h3>
            <p>From May 2020 to August 2022 <span>PizzaShop Sousse</span></p>
            </div>
            <div className="ex" >
            <h3>Semi Chef</h3>
            <p>From May 2020 to April 2021  <span>Catalina Hammamet</span></p>
            </div>
            <div className="ex" >
            <h3>Party Leader</h3>
            <p>From May 2020 to April 2021  <span> Room Food Hammamet</span></p>
            </div>
            <div className="ex" >
            <h3>Pizzaiolo</h3>
            <p>From June 2017 to September 2018  <span>Resto Bar L'Opera Hammamet</span></p>
            </div>
            <div className="ex" >
            <h3>Pizzaiolo</h3>
            <p>From September 2018 to May 2020  <span>NessCute Hammamet</span></p>
            </div>
        </div>
        <div className="work" >
        <div className="pizza_photos" >
            <img className="pizza" src={pizza1} alt=""/>
            <img className="pizza" src={pizza2} alt=""/>

        </div>
        <div className="pizza_photos" >
            <img className="pizza" src={pizza3} alt=""/>
            <img className="pizza" src={pizza4} alt=""/>

        </div>

        </div>
    </div>)
}

export default WorkExperience 