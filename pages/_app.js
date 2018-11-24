import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store';
// import jQuery from 'jquery';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// window.jQuery = window.$ = jQuery;
class MyApp extends App {
  static async getInitialProps ({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    // console.log('my app')
    const {Component, pageProps, store} = this.props
    return <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
}

export default withRedux(initStore)(MyApp)