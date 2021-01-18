import React from "react";
import northImage from "../images/north.png";
import southImage from "../images/south.png";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "Its northern hemisphere",
    picture: northImage,
  },
  Southern: {
    text: "Its northern hemisphere",
    picture: southImage,
  },
};

export default function HemisphereDisplay({ latitude, longitude }) {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere" />
        </div>
        <div className="ui teal bottom attached label">
            <h5>{text}</h5>
        </div>
      </div>
    </div>
  );
}
