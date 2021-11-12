import React from "react";
import { commonContext } from "./commonContext";

class Header extends React.Component {
  render() {
    return (
      <commonContext.Consumer>
        {({ color }) => <h1 style={{backgroundColor:color}}>hello this is Header page</h1>}
      </commonContext.Consumer>
    );
  }
}

export default Header;
