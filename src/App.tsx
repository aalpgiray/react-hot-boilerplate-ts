import React, { Component } from 'react';
import { Link } from "react-router"

import Navigator from "./components/navigator"
import { links } from "./routes"

export default class App extends Component<{}, {}> {
  componentWillUnmount() {
    alert("Hey stop! You ruined the hot reload.");
  }

  render() {
    return (
      <div>
        <Navigator routes={links} />
        <div class="pageContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
