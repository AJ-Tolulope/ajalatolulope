import React from 'react'
import Link from 'next/link';
import './navigation.css'

function Navigation() {
  return (
    <nav className="nav-menu">
      <div className="nav-close-btn">&times;</div>
      <div className="nav-links">
        <ul>
          <li>
            <Link href="./index.html" className="link-item active">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="link-item">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="link-item">
              Services
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="link-item">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#testimonial" className="link-item">
              Testimonial
            </Link>
          </li>
          <li>
            <Link href="#contact" className="link-item">
              Contact
            </Link>
          </li>
          <li>
            <Link href="./blogs.html" className="link-item">
              Blog
            </Link>
          </li>
          {/* <!-- <li><Link href="./webedit_course.html">thewebedits Course</Link></li> --> */}
        </ul>
        <p className="copyright">
          &copy <span className="year"></span>, thewebedits <br />{" "}
          contactthewebedits@gmail.com
        </p>
      </div>
    </nav>
  );
}

export default Navigation