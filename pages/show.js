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
				<div className="row">
					{
						cast.map( (item, index)  => (
							<Cast key={index} castItem={item} />
						))
					}
				</div>
			</div>
		)
	}
}
class CrewList extends React.Component{
	render(){
		const { crew } = this.props; 
		return (
			
				<div className="row">
					{
						crew.map( (item, index)  => (
							<Crew key={index} crewItem={item} />
						))
					}
				</div>
			
		)
	}
}

class Cast extends React.Component{
	render(){
		const { person } = this.props.castItem; 
		const imgSrc = person.image ? person.image.medium : "../static/no-img-portrait-clean.png";
		return (
			<div className="col-md-3">
				<img  src={imgSrc}/>
				<p>{person.name}</p>
			</div>
		)
	}
}

class Crew extends React.Component{
	render(){
		const { person, type } = this.props.crewItem; 
		// console.log('person: ', person);
		const imgSrc = person.image ? person.image.medium : '../static/no-img-portrait-clean.png';
		return (
			<div className="col-md-3">
				<img  src={imgSrc} alt="no image"/>
				<p>{person.name}</p>
				<p>as {type}</p>
			</div>
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
		  
			<div className="col-md-12 col-lg-12">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="main-tab" data-toggle="tab" href="#main" role="tab" aria-controls="main" aria-selected="true">Main</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Cast</a>
					</li>
					
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Crew</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="main-tab">
						<div className="row">
							<div className="col-md-4">
								<img src={show.image.medium}/>
							</div>
							<div className="col-md-8">
								<h1>{show.name}</h1>
								<p>Network: {show.network && show.network.name} { show.network && show.network.country.name}</p>
								<p>Premiered: {show.premiered}</p>
								<p>Runtime: {show.runtime} mins</p>
								<p>Language: {show.language}</p>
								<p>Status: {show.status}</p>
								<p>Genres: {
									show.genres &&	show.genres.map( (item, index) => <span key={index}>{item}, </span>)}</p>
								<div>
									
								<ReactMarkdown
									source={show.summary}
									escapeHtml={false}
								/>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade show" id="home" role="tabpanel" aria-labelledby="home-tab">
						<CastList cast={show._embedded.cast} />
					</div>
					
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<CrewList crew={show._embedded.crew} />
					</div>
				</div>
			</div>
			
        </div>
      </Layout>
    );
  }
}


Show.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=crew&embed[]=cast&embed[]=episodes`)
  const show = await res.json()

//   console.log(`Fetched show: ${JSON.stringify(show) }`)

  return { show }
}

export default Show
