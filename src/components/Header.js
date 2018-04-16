import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <p className="header__subtitle">{props.subtitle}</p>
    </header>
  );
}

export default Header;
