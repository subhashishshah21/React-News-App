import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsURL, author, date, source } = this.props;
        return (

            <div >
                <div className="card my-4" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="Sports" />
                    <div className="card-body">
                        <h5 className="card-title">{title} <br/>
                          <span class="badge bg-success">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">Published by {!author?"Unknown":author} at {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}
