import React from 'react';
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown/with-html';
import Head from 'next/head';
class Post extends React.Component {
  render() {
    const { show } = this.props; 
    return (
      <Layout>
      <Head>
        <title>{show.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <h1>{show.name}</h1>
        <ReactMarkdown
            source={show.summary}
            escapeHtml={false}
        />
        <img src={show.image.medium}/>
        <h3>List of person</h3>
        <ul>
          {
            show._embedded.cast.map( (item, index) => {
              <li key={index}>{item.person.name}</li>
            })
          }
        </ul>
      </Layout>
    );
  }
}


Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
