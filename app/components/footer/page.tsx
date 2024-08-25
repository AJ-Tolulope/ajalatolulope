import React from "react";
import Link from "next/link";
import "./footer.css";

function Footer() {
  return (
    <section className="footer-section section" id="footer">
      <div className="container">
        <h2>quick links</h2>
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
          <li>
            <Link href="/pages/blog">Blog</Link>
          </li>
        </ul>

        <div className="copyright">
          <p>
            &copy; <span className="year"></span>, contactthewebedits@gmail.com
          </p>
          <p>
            Made with <i className="fas fa-heart" style={{ color: "red" }}></i>{" "}
            by aj.tolulope Follow |{" "}
            <Link href="https://instagram.com/thewebedits">@thewebedits</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
