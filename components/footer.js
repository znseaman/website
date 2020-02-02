import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href={"https://www.linkedin.com/in/zacharyneilseaman"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href={"https://github.com/znseaman"} target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li>
          <a href={"mailto:admin@zachseaman.com"} target="_blank" rel="noopener noreferrer">Email</a>
        </li>
      </ul>
      <style jsx>{`
      footer {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      footer > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        flex: 1;
        justify-content: center;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 1em;
        padding: 6px 8px;
        width: 100%;
        height: 100%;
      }
      a:hover {
        background-color: #067df7;
        color: white;
      }
    `}</style>
    </footer>
  )
}

export default Footer
