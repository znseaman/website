import React from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Zachary Seaman</a>
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
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      li:first-child {
        margin-right: auto;
      }
    `}</style>
  </nav>
);

export default Nav;
