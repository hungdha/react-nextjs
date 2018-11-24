import React from 'react';
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown/with-html';
import Head from 'next/head';
class CastList extends React.Component{
	render(){
		const { cast, title } = this.props; 
		return (
			<div>
				<h3>{title}</h3>
				<ul>
					{
						cast.map( (item, index)  => (
							<Cast key={index} castItem={item} />
						))
					}
				</ul>
			</div>
		)
	}
}
class CrewList extends React.Component{
	render(){
		const { cast } = this.props; 
		return (
			<div>
				<ul>
					{
						cast.map( (item, index)  => (
							<Crew key={index} castItem={item} />
						))
					}
				</ul>
			</div>
		)
	}
}
class CharacterList extends React.Component{
	render(){
		const { cast, title } = this.props; 
		return (
			<div>
				<h3>{title}</h3>
				<ul>
					{
						cast.map( (item, index)  => (
							<Character key={index} castItem={item} />
						))
					}
				</ul>
			</div>
		)
	}
}
class Cast extends React.Component{
	render(){
		const { person } = this.props.castItem; 
		return (
			<li>
				<img  src={person.image.medium}/>
				<span>{person.name}</span>
			</li>
		)
	}
}
class Character extends React.Component{
	render(){
		const {  character } = this.props.castItem; 
		const imgSrc = character.image ? character.image.medium : '';
		return (
			<li>
				<img  src={imgSrc} alt="no image"/>
				<span>{character.name}</span>
			</li>
		)
	}
}
class Crew extends React.Component{
	render(){
		const {  person, type } = this.props.castItem; 
		return (
			<li>
				<span>Type: {type}</span>
				<img  src={person.image.medium}/>
				<span>{person.name}</span>
			</li>
		)
	}
}

class Show extends React.Component {
  render() {
    const { show } = this.props; 
    return (
      <Layout>
      <Head>
        <title>{show.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row">
		  <div className="col-md-4">
		  	<img src={show.image.medium}/>
		  </div>
		  	<div className="col-md-8">
				<h1>{show.name}</h1>

				<p>Network: {show.network.name} {show.network.country.name}</p>
				<p>Premiered: {show.premiered}</p>
				<p>Runtime: {show.runtime} mins</p>
				<p>Language: {show.language}</p>
				<p>Status: {show.status}</p>
				<p>Genres: {
					show.genres.map( (item, index) => <span key={index}>{item}, </span>)}</p>
				<div>
					
				<ReactMarkdown
					source={show.summary}
					escapeHtml={false}
				/>
				</div>
			</div>
			<div className="col-md-12 col-lg-12">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Cast</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Characters</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Crew</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						<CastList cast={show._embedded.cast} title="Cast" />
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<CharacterList cast={show._embedded.cast} title="Character" />
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						
					</div>
				</div>
			</div>
			
        </div>
      </Layout>
    );
  }
}


Show.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=crew&embed[]=cast&embed[]=episodes`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Show
