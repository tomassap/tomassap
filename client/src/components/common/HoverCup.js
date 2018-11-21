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
    this.spin = this.spin.bind(this);
    this.anim = this.anim.bind(this);
    this.animOut = this.animOut.bind(this);
  }

  componentDidMount() {
    this.setState({
      in: true
    });
  }

  spin() {
    const spinCup = anime({
      targets: this.cupRef.current,
      duration: 3000,
      scale: [0.9, 1]
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
          <div
            className="coffee circle-base"
            ref={this.cupRef}
            onMouseOver={this.spin.bind(this)}
          />
        </Waypoint>
      </Link>
    );
  }
}

export default HoverCup;
