import React from 'react';

import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <NavBar />

          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          
          <ThemeToggle />

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
