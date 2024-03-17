import React from "react";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <div>
        <img src={this.props.data.imageUrl} alt=""  className="h-56 " />
          <div style={{display:'flex'}}>
            <img src={this.props.data.avatar} alt="avatar" style={{height:'40px', width:'40px'}} />
        
          <div className="">
            <h4>{this.props.data.heading}</h4>
            <h6> <b>{this.props.data.channelName}</b></h6>
            <h6> {this.props.data.uploaded} views {this.props.data.uploaded} days ago </h6>
          </div>
          <div>
            <img src={this.props.data.icon} alt="icons" style={{height:'30px'}} />
          </div>
        </div>
        </div>  
      </>

    )
  }
}
export default Youtube
