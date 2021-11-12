import React from "react";
import { commonContext } from "./commonContext";

class Main extends React.Component {
  render() {
    return (
      <commonContext.Consumer>
        {({ color }) => <h1 style={{backgroundColor:color}}>hello this is main page</h1>}
      </commonContext.Consumer>
    );
  }
}

export default Main;
