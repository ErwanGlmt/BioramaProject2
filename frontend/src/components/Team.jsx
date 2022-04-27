/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from "react";
import "./Team.css";

function Team({ image, name, role }) {
  return (
    <div className="team-photos">
      <img src={image} />
      <h3>{name}</h3>
      <h4>{role}</h4>
    </div>
  );
}

export default Team;
