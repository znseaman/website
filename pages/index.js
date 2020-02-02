import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Home = () => (
  <>
    <div className="content">
      <Head>
        <title>Zachary Seaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="hero">
        <h1 className="title">Zachary Seaman</h1>
        <div className="column">
          <p className="description">
            Full Stack JavaScript Geospatial Software Developer
          </p>
          <br />
          <p className="description">
            Backend: Node.js, Express
          </p>
          <p className="description">
            Frontend: JavaScript, React
          </p>
          <p className="description">
            Geospatial: Leaflet, GoogleMaps, PostGIS
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
        padding-top: 2em;
        line-height: 1.15;
        font-size: 2.5em;
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

export default Home;
