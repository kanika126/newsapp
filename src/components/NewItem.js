import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className="my-1">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://th.bing.com/th/id/OIP.hPCeNInm-7R8_QWXn8rGWAHaEK?pid=ImgDet&rs=1.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewItem
