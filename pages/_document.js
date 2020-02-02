import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
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
        </body>
      </html>
    )
  }
}

export default MyDocument;