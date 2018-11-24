import React, { Component } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import Layout from '../components/Layout';
// import fetch from 'isomorphic-unfetch'
import axios from 'axios';
import Head from 'next/head';
import MyError from './_error';
import {SHOW_SEARCH_ENDPOINT} from '../constants/EndpointTypes';
const PostLink = (props) => (
    <li>
        
        <Link as={`/p/${props.show.id}`} href={`/post?id=${props.show.id}`}>
            <a>{props.show.name}</a>
          </Link>
    </li>
)
class Posts extends Component {
    
    onSearchHandler(event){
        event.preventDefault();
        const text = this.textSearch.value;
    }
    render() {
        if(this.props.statusCode)
            return <MyError statusCode={this.props.statusCode} />
        return (<Layout>
            <form action="#" method="GET" >
                <input type="text" placeholder="search" name="q" />
                <button type="submit">Search</button>
            </form>
            <div>
                <h1>Batman TV Shows</h1>
                <ul>
                {this.props.shows.map(({show}) => (
                    <PostLink key={show.id} show={show} />
                ))}
                </ul>
            </div>
        </Layout>);
        
    }
}
Posts.getInitialProps = async function ({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log("userAgent: " , userAgent );
    let params = { params : {q:'girls'} };
    if( req && req.query.q != null )
        params = { params : {q  : req.query.q} };
    
    try{  
        const res = await axios(SHOW_SEARCH_ENDPOINT , params);
        const statusCode =  res.status > 200 ? res.status : false;
        return {
            statusCode:statusCode,
            shows: res.data
        }
       
    }catch(e) {
        console.log('error: ', e);  
        return {
            statusCode : 404,
            data : []
        }
    }
        
}
export default Posts;