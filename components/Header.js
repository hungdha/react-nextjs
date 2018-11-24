import React, { Component } from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  }
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="#">TVMASE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        
                    
                        <Link href="/">
                            <a className="nav-link" style={linkStyle}>Home</a>
                        </Link>
                        <Link prefetch href="/about">
                            <a className="nav-link" style={linkStyle}>About</a>
                        </Link>
                        <Link href="/shows">
                            <a className="nav-link" style={linkStyle}>Shows</a>
                        </Link>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;