import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class ErrorPage extends React.Component {
  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { errorCode }
  }

  render() {
    var response
    switch (this.props.errorCode) {
      case 200:
      case 404:
        response = (
          <>
            <div className="content">
              < h1 className="title" > Page Not Found</h1 >
              <p>The page <strong>{this.props.router.asPath}</strong> does not exist.</p>
              <p><Link href="/"><a>Home</a></Link></p>
            </div>
            <style jsx global>{`
            .content {
              color: #000;
              background: #fff;
              font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
              height: 100vh;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
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
            `}
            </style>
          </>
        )
        break
      case 500:
        response = (
          <>
            <div className="content">
              <h1 className="title">Internal Server Error</h1>
              <p>An internal server error occurred.</p>
              <p><Link href="/"><a>Home</a></Link></p>
            </div>
            <style jsx global>{`
            .content {
              color: #000;
              background: #fff;
              font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
              height: 100vh;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
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
            `}
            </style>
          </>
        )
        break
      default:
        response = (
          <>
            <div className="content">
              <h1 className="title">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred while
                trying to access <strong>{this.props.router.asPath}</strong>
              </p>
              <p><Link href="/"><a>Home</a></Link></p>
            </div>
            <style jsx global>{`
            .content {
              color: #000;
              background: #fff;
              font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
              height: 100vh;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
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
            `}
            </style>
          </>
        )
    }

    return response
  }

}

export default withRouter(ErrorPage)