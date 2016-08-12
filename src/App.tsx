import React, { Component } from 'react'
import { Link } from "react-router"
import injectTapEventPlugin from 'react-tap-event-plugin';


import Navigator from "./components/navigator"
import { links } from "./routes"

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


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
