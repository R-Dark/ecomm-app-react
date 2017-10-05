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
        primary={true}
      />
    </Link>
    <br />
    <br />
    <Link to="/oculus">
      <RaisedButton
        label=" --- SHOP OCCULUS RIFT --- "
        fullWidth={true}
        primary={true}
        style={{
          width: "100%",
          margin: "0 auto"
        }}
      />
    </Link>
    <br />
    <br />
    <Link to="/blog">
      <RaisedButton
        label=" --- VR TECH BLOG --- "
        fullWidth={true}
        primary={true}
      />
    </Link>
  </div>
);

export default RaisedButtonExampleSimple;
