import React from "react";
import Paper from "material-ui/Paper";
import RaisedButtonExampleSimple from "./Button";

const style = {
  height: 500,
  width: 500,
  margin: 50,
  textAlign: "center",
  display: "inline-block"
};

const PaperExampleCircle = () => (
  <div className="circle-home">
    <Paper style={style} zDepth={2} circle={true}>
      <div className="home-button">
        <RaisedButtonExampleSimple />
      </div>
    </Paper>
  </div>
);

export default PaperExampleCircle;
