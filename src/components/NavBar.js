import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class NavBar extends Component {
//
//   static contextType = ThemeContext;
//
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           )
//         }
//       }
//       </ThemeContext.Consumer>
//     )
//   }
// }

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  const theme = isLightTheme ? light : dark
  
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div style={{ cursor: 'default' }} onClick={toggleAuth}>{ isAuthenticated ? 'Logged In' : 'Logged Out'}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar;
