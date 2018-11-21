import React, { Component } from "react";
import anime from "animejs";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Waypoint from "react-waypoint";

class HoverCup extends Component {
  constructor(props) {
    super(props);

    // create cup DOM reference
    this.cupRef = React.createRef();
    this.anim = this.anim.bind(this);
    this.animOut = this.animOut.bind(this);
  }

  componentDidMount() {
    this.setState({
      in: true
    });
  }

  anim() {
    const fadeIn = anime({
      targets: this.cupRef.current,
      delay: 500,
      duration: 3000,
      scale: [0, 1],
      opacity: 1,
      rotate: "3turn"
    });
  }

  animOut() {
    const fadeOut = anime({
      targets: this.cupRef.current,
      duration: 1000,
      scale: [1, 0],
      opacity: 0
    });
  }

  render() {
    return (
      <Link to="/contact">
        <Waypoint onEnter={this.anim} onExit={this.animOut}>
          <div className="coffee circle-base" ref={this.cupRef} />
        </Waypoint>
      </Link>
    );
  }
}

export default HoverCup;
