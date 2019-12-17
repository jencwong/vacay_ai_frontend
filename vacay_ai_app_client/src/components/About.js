import React, { Component } from "react";
import ReactPlayer from "react-player";

class About extends Component {
  render() {
    return (
      <div className="about">
        {/* <ReactPlayer url="https://youtu.be/rcvlwv_Se5c" playing /> */}

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rcvlwv_Se5c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default About;
