import React, { Component } from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  }
class Header extends Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <a style={linkStyle}> <img src="/static/next-js-logo.png"  alt="x" style={{'width' : '50px'}}/></a>
                </Link>
               
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link prefetch href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
                <Link href="/posts">
                    <a style={linkStyle}>Posts</a>
                </Link>
            </div>
        );
    }
}

export default Header;