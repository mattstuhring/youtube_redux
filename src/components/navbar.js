import React from 'react';

const Navbar = () => {
  return (

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" >
            <img alt="Brand" src="../style/icon.png" />
          </a>
        </div>
        <p className="navbar-text navbar-right">Search & Watch</p>
      </div>
    </nav>
  );
}

export default Navbar;
