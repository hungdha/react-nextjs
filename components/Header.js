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
                    
                </div>
            </nav>
        );
    }
}

export default Header;