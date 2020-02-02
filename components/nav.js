import React from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className={label.toLowerCase()}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        padding: 6px 8px;
        width: 100%;
        height: 100%;
      }
      a:hover {
        background-color: #067df7;
        color: white;
      }
      li:first-child {
        margin-right: auto;
      }
    `}</style>
  </nav>
);

export default Nav;
