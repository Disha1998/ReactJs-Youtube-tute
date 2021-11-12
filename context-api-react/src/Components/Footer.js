import React from "react";
import { commonContext } from "./commonContext";

class Footer extends React.Component {
  render() {
    return (
      <commonContext.Consumer>
        {({ color }) => <h1 style={{backgroundColor:color,bottom:"0",position:'absolute',width:'100%'}}>hello this is Footer page</h1>}
      </commonContext.Consumer>
    );
  }
}

export default Footer;
