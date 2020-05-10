import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({toggleTheme}) => <button onClick={toggleTheme}>Toggle The Theme</button>}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeToggle;
