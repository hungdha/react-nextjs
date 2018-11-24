import React, { Component } from 'react';
// import {withRouter} from 'next/router';
import Layout from '../components/Layout';
class Profile extends Component {
    render() {
        return (
            <Layout>
                <div>Profile of {this.props.router.query.name} </div> 
            </Layout>
        );
    }
}

export default Profile;