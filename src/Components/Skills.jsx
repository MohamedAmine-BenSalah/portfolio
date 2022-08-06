import React from "react";
import "../Styles/skills.css";
const image = require("../StaticAssets/B988D615-39D5-45A7-A1EE-DE84A7F9C3CA.jpeg")
const Skills = () => {
    return (<div className="skills" >
        <div className="skills_desc" >
        <h1 className="title" >Skills</h1>
        <ul>
          <li>Experiment with recipes and suggest new ingredients</li>
          <li>Monitor food stock and place orders</li>
          <li>Supervise Cooks and assist as needed</li>
          <li>Cooking food in a timely manner</li>
          <li>
            Setting up the kitchen with cooking utensils and equipment, like
            knives, pans and food scales
          </li>
          <li>Studying each recipe and gathering all necessary ingredients</li>
        </ul>
      </div>
        <div className="skills_photo" >
            <img className="im" src={image} alt=""/>
        </div>
    </div>)
}

export default Skills;