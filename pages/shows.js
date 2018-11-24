import React, { Component } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import Layout from '../components/Layout';
// import fetch from 'isomorphic-unfetch'
import axios from 'axios';
import Head from 'next/head';
import MyError from './_error';
import {SHOW_SEARCH_ENDPOINT} from '../constants/EndpointTypes';
import ReactMarkdown from 'react-markdown/with-html';

const PostLink = (props) => (
    <div className="col-md-6">
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{props.show.type}</strong>
              <h3 className="mb-0">
                    <Link as={`/show/${props.show.id}`} href={`/show?id=${props.show.id}`} >
                        <a className="text-dark" href="#">{props.show.name}</a>
                    </Link>
              </h3>
              <div className="mb-1 text-muted">{props.show.premiered}</div>
                <div className="sumary">
                    <ReactMarkdown
                            source={props.show.summary}
                            escapeHtml={false}
                        />
                </div>
                <Link as={`/show/${props.show.id}`} href={`/show?id=${props.show.id}`} >
                    <a href="#">Continue reading</a>
                </Link>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block" 
            alt="Thumbnail [200x250]" style={{ width: "200px", height: "250px"}} src={props.show.image.medium} />
          </div>
    </div>
)
class Shows extends Component {
    
    onSearchHandler(event){
        event.preventDefault();
        const text = this.textSearch.value;
    }
    render() {
        if(this.props.statusCode)
            return <MyError statusCode={this.props.statusCode} />
        return (<Layout>
            <form action="#" method="GET" >
                <input type="text" placeholder="search" name="q" className="form-control" />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div>
                <h1>Batman TV Shows</h1>
                <div className="row">
                    {this.props.shows.map(({show}) => (
                        <PostLink key={show.id} show={show} />
                    ))}
                </div>
            </div>
        </Layout>);
        
    }
}
Shows.getInitialProps = async function ({req}) {
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
export default Shows;