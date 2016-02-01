import Logo from '../logo/index.jsx';
import Navigation from '../navigation/index.jsx';
import Copyright from '../copyright/index.jsx';
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
      <Copyright />
    </footer>
  </layout>
);

export default Layout;
