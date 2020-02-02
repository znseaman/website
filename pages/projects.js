import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Projects = () => (
  <>
    <div className="content">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="hero">
        <h1 className="title">Projects</h1>

        <div className="row">
          <a href="/record-map" className="card">
            <h3>Record Map &rarr;</h3>
            <p>A map that records a layer with undo / redo actions</p>
          </a>
          <a href="/to_go_to_list" className="card">
            <h3>To Go To List &rarr;</h3>
            <p>A web application to keep track of the places you'd like to visit</p>
          </a>
          <a href="/find_apartment" className="card">
            <h3>Find Apartment &rarr;</h3>
            <p>A web application to find a place to rent in Vancouver</p>
          </a>
          {/* <a href="https://nextjs.org/learn" className="card">
          <h3>Project 2 &rarr;</h3>
          <p>Short description of the project</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Project 3 &rarr;</h3>
          <p>Short description of the project</p>
        </a> */}
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
        font-size: 1.2em;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 1em;
        color: #333;
      }

      @media( max-width: 610px){
        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .card {
          margin-bottom: 1em;
        }
      }
    `}</style>
    </div>
    <Footer />
  </>
);

export default Projects;
