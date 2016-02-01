import Navigation from '../navigation/index.jsx';
import React from 'react';

const Layout = ({content = () => null }) => (
  <layout className="layout">
    <header className="header">
      <Logo />
      <Navigation />
    </header>

    <main className="main">
      {content()}
    </main>

    <footer className="footer">
      <p className="copyright">&copy; 2016, <a href="http://damirvazgird.com">Damir Vazgird</a>.</p>
    </footer>
  </layout>
);

export default Layout;
