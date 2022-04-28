import React from "react";
import "../styles/Team.css";
import PropTypes from "prop-types";

function Team({ image, name, role }) {
  return (
    <div className="team-photos">
      <img src={image} alt={image} />
      <h3>{name}</h3>
      <h4>{role}</h4>
    </div>
  );
}

Team.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

Team.defaultProps = {
  image: "",
  name: "",
  role: "",
};
export default Team;
