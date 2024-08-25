import React from 'react'
import Link from 'next/link';
import './header.css'

function Header() {
  return (
      <div className="header" id="header">
        <div className="container">
          <div className="logo">
            <Link href="/">W</Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link href="/pages/about">About</Link>
              </li>
              <li>
                <Link href="/pages/portfolio">Portfolios</Link>
              </li>
              <li>
                <Link href="/pages/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="theme">
            <i className="fas fa-moon"></i>
          </div>
          <div className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  );
}

export default Header