const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
          /* Global Style */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          }
          `}
      </style>
      <style jsx global>{`
          /* Global Structure */
          html, body {
            height: 100%;
          }

          body {
            display: flex;
            flex-direction: column;
          }

          #__next {
            display: flex;
            flex-direction: column;
            flex: 1 0 auto;
          }
          
          footer {
            flex-shrink: 0;
          }
          `}
      </style>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;