import React, { Component } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import Layout from '../components/Layout';
// import fetch from 'isomorphic-unfetch'
import MyError from './_error';
import { fetchShows } from '../actions/shows';
import ShowsList from '../components/ShowsList';


class Shows extends Component {
    static async getInitialProps({store, req, isServer, pathname, query}) {
        
        if(isServer){
            const params  = {
                params : {
                    q : 'hell'
                }
            }
            await store.dispatch(fetchShows(params));
            return {custom: 'custom server'}
        }else{
            store.dispatch(fetchShows({
                params : {
                    q : 'hell'
                }
            }));
            return {custom: 'custom client'};
        }
    
    
    }
    onSearchHandler(event){
        event.preventDefault();
        const text = this.textSearch.value;
    }
    render() {
        // console.log("this.props: ",this.props)
        if(this.props.statusCode)
            return <MyError statusCode={this.props.statusCode} />
        return (<Layout>
            <pre>{this.props.custom}</pre>
            <form action="#" method="GET" >
                <div className="input-group mb-3">
                    <input type="text" className="form-control" 
                    placeholder="Search shows" 
                    aria-label="Recipient's username"
                     aria-describedby="button-addon2"
                     name="q" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </div>
                </div>
            </form>
            <ShowsList />
        </Layout>);
        
    }
}

export default Shows;