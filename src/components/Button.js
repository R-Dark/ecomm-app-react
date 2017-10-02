import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

const style = {
  margin: 12
};

const RaisedButtonExampleSimple = () => (
  <div>
    <Link to="/vive">
      <RaisedButton
        label=" --- SHOP HTC VIVE --- "
        fullWidth={true}
        secondary={true}
      />
    </Link>
    <br />
    <br />
    <Link to="/oculus">
      <RaisedButton
        label=" --- SHOP OCCULUS RIFT --- "
        fullWidth={true}
        primary={true}
      />
    </Link>
    <br />
    <br />
    <Link to="/blog">
      <RaisedButton
        label=" --- VR TECH BLOG --- "
        fullWidth={true}
        secondary={true}
      />
    </Link>
  </div>
);

export default RaisedButtonExampleSimple;
