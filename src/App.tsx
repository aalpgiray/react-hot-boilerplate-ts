import React, { Component } from 'react'

import Navigator from 'navigator/navigator'
import { links } from 'routes'

export default class App extends Component<{}, {}> {
  componentWillUnmount() {
    alert(`Hey stop! You ruined the hot reload.`);
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
