import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {({toggleTheme}) => <button onClick={toggleTheme}>Toggle The Theme</button>}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const ThemeToggle = () => {

  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle The Theme</button>
}

export default ThemeToggle;
