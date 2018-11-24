import React, { Component } from 'react';
import Layout from '../components/Layout';
class Contact extends Component {
    render() {
        return (
            <Layout>
          
            <h2>HTML Forms</h2>

                <form action="#">
                First name:<br />
                <input type="text" name="firstname" defaultValue="mickey" />
                <br/>
                Last name:<br/>
                <input type="text" name="lastname" defaultValue="donal" />
                <br/><br/>
                <input type="submit" value="Submit" />
                </form> 
            </Layout>
        );
    }
}

export default Contact;