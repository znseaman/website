import React from "react";

const Footer = () => {
  return (
    <footer style={{ "flexShrink": 0 }}>
      <ul>
        <li>
          <a href={"https://www.linkedin.com/in/zacharyneilseaman"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href={"https://github.com/znseaman"} target="_blank" rel="noopener noreferrer">Github</a>
        </li>
      </ul>
      <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
      }
      footer {
        text-align: center;
        margin-top: auto;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > footer {
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
    `}</style>
    </footer>
  )
}

export default Footer
