import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const About = () => (
  <>
    <div className="content">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="hero">
        <h1 className="title">About Me</h1>
        <div className="column">
          <p className="description">
            I'm an American 🇺🇸 software developer 👨‍💻 living in Vancouver 🇨🇦
          </p>
          <p className="description">I'm interested in JavaScript 🤖, geolocation 📍, web mapping  🗺  and geographic information systems 🌎 </p>
          <p className="description">I've previously lived in Mexico City 🇲🇽</p>
          <p className="description">I speak Spanish 🇲🇽 and French 🇫🇷</p>
        </div>
        <h1 className="title">About the Site</h1>
        <div className="column">
          <p className="description">
            The site was built using Next.js and hosted on <a href="https://m.do.co/c/c3f2c9d3a7be">DigitalOcean</a> (referral link).
          </p>
        </div>
      </div>

      <style jsx>{`
      .content {
        flex: 1 0 auto;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .column {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </div>
    <Footer />
  </>
);

export default About;
