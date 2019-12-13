import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';

import { fetchInitialStoreState, Store } from '../store'
import { Provider } from 'mobx-react'

export default class MyApp extends App {

  state = {
    store: new Store(),
  }

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    const initialStoreState = await fetchInitialStoreState()

    return {
      ...appProps,
      initialStoreState,
    }
  }
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <React.Fragment>
          <Head>
            <title>DENİZ ELEKTRONİK</title>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider store={this.state.store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </React.Fragment>
      );
    }
  }