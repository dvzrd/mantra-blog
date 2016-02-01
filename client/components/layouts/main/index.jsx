import Logo from '../../modules/logo/index.jsx';
import Navigation from '../../modules//navigation/index.jsx';
import Copyright from '../../modules/copyright/index.jsx';
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
