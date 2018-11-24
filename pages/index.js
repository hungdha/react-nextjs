import React, { Component } from 'react';
import ButtonPlus from '../components/ButtonPlus';

import Layout from '../components/Layout';
/*
    Server-rendered by default
    Automatic code splitting for faster page loads
    Simple client-side routing (page based)
    Webpack-based dev environment which supports (HMR)
    Able to implement with Express or any other Node.js HTTP server
    Customizable with your own Babel and Webpack configurations
*/

class Home extends Component {
    render() {
        return (
            <Layout>
                <h1>My Blog</h1>
                <ButtonPlus>+1</ButtonPlus>
            </Layout>
        );
    }
}

export default Home;
