import React, { Component } from "react";
import anime from "animejs";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class BioBlurb extends Component {
  constructor(props) {
    super(props);

    let inst;
    let _isMounted;
    let anim;

    // create DOM references
    this.ml1 = React.createRef();
    this.textWrapper = React.createRef();
    this.line1 = React.createRef();
    this.line2 = React.createRef();
    this.letters = React.createRef();

    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.setState({
      in: true
    });

    this._isMounted = true;

    const text = [
      "How Can I Help?",
      "Software Development & Design",
      "Music Composition & Production",
      "Photography & Cinematography",
      "Graphic Design & Motion Design",
      "Creative Direction & Art Direction"
    ];
    const elem = this.letters.current;
    this.change(text, elem);
    this.inst = setInterval(
      function() {
        this.change(text, elem);
      }.bind(this),
      16000
    );
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.inst);
  }

  async change(text, elem) {
    for (let i = 0; i < text.length; i++) {
      if (!this._isMounted) {
        return;
      }
      elem.innerHTML = text[i];
      this.anim = await anime
        .timeline({ loop: false })
        .add({
          targets: [this.ml1.current, this.letters.current],
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 600
        })
        .add({
          targets: [this.ml1.current, this.line1.current, this.line2.current],
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: "-=875"
        })
        .add({
          targets: this.ml1.current,
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        }).finished;
    }
  }

  render() {
    return (
      <h1 className="ml1" ref={this.ml1}>
        <span className="text-wrapper" ref={this.textWrapper}>
          <span className="line line1" ref={this.line1} />
          <span className="letters" ref={this.letters} />
          <span className="line line2" ref={this.line2} />
        </span>
      </h1>
    );
  }
}

export default BioBlurb;
