import Document, { Html, Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.styles = flush();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;