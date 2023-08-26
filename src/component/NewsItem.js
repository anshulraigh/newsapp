import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img alt='' src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/rajinikanth-jailer-244244-16x9.jpg?VersionId=VEPL1Wv3Inys3KSWURG37sw5VWE8i1yW" : imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
