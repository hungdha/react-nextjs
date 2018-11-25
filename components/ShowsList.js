import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
const ShowLink = (props) => (
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
                <p>Network: Fuji TV Japan</p>
                <p>Rating: {props.show.rating.average}</p>
                <Link as={`/show/${props.show.id}`} href={`/show?id=${props.show.id}`} >
                    <a href="#">Continue reading</a>
                </Link>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block" 
            alt="Thumbnail [200x250]" style={{ width: "200px", height: "250px"}} src={props.show.image.medium} />
          </div>
    </div>
)
class ShowsList extends Component {
    render() {
        const { loading, error, items } = this.props.shows;
       
            return (
                <div className="row">
                    {items && items.map(({show}) => (
                        <ShowLink key={show.id} show={show} />
                    ))}
                </div>
            );
    }
}

const mapStateToProps = (state, ownProps) => ({
    shows : state.shows,
    counter : state.shows.counter
})
const mapDispatchToProps = (dispatch, ownProps) => ({

})
export default connect(
    mapStateToProps
    )(ShowsList);