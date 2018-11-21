import React, { Component } from "react";
import anime from "animejs";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LandingAnimation extends Component {
  componentDidMount() {
    var penner = anime.timeline({
      loop: true,
      direction: "alternate",
      duration: 5000
    });
    penner
      .add({
        targets: "#penner .linear",
        translateX: 250,
        offset: 0,
        easing: "linear"
      })
      .add({
        targets: "#penner .InQuad",
        translateX: 250,
        offset: 0,
        easing: "easeInQuad"
      })
      .add({
        targets: "#penner .InCubic",
        translateX: 250,
        offset: 0,
        easing: "easeInCubic"
      })
      .add({
        targets: "#penner .InQuart",
        translateX: 250,
        offset: 0,
        easing: "easeInQuart"
      })
      .add({
        targets: "#penner .InQuint",
        translateX: 250,
        offset: 0,
        easing: "easeInQuint"
      })
      .add({
        targets: "#penner .InSine",
        translateX: 250,
        offset: 0,
        easing: "easeInSine"
      })
      .add({
        targets: "#penner .InExpo",
        translateX: 250,
        offset: 0,
        easing: "easeInExpo"
      })
      .add({
        targets: "#penner .InCirc",
        translateX: 250,
        offset: 0,
        easing: "easeInCirc"
      })
      .add({
        targets: "#penner .InBack",
        translateX: 250,
        offset: 0,
        easing: "easeInBack"
      })
      .add({
        targets: "#penner .OutQuad",
        translateX: 250,
        offset: 0,
        easing: "easeOutQuad"
      })
      .add({
        targets: "#penner .OutCubic",
        translateX: 250,
        offset: 0,
        easing: "easeOutCubic"
      })
      .add({
        targets: "#penner .OutQuart",
        translateX: 250,
        offset: 0,
        easing: "easeOutQuart"
      })
      .add({
        targets: "#penner .OutQuint",
        translateX: 250,
        offset: 0,
        easing: "easeOutQuint"
      })
      .add({
        targets: "#penner .OutSine",
        translateX: 250,
        offset: 0,
        easing: "easeOutSine"
      })
      .add({
        targets: "#penner .OutExpo",
        translateX: 250,
        offset: 0,
        easing: "easeOutExpo"
      })
      .add({
        targets: "#penner .OutCirc",
        translateX: 250,
        offset: 0,
        easing: "easeOutCirc"
      })
      .add({
        targets: "#penner .OutBack",
        translateX: 250,
        offset: 0,
        easing: "easeOutBack"
      })
      .add({
        targets: "#penner .InOutQuad",
        translateX: 250,
        offset: 0,
        easing: "easeInOutQuad"
      })
      .add({
        targets: "#penner .InOutCubic",
        translateX: 250,
        offset: 0,
        easing: "easeInOutCubic"
      })
      .add({
        targets: "#penner .InOutQuart",
        translateX: 250,
        offset: 0,
        easing: "easeInOutQuart"
      })
      .add({
        targets: "#penner .InOutQuint",
        translateX: 250,
        offset: 0,
        easing: "easeInOutQuint"
      })
      .add({
        targets: "#penner .InOutSine",
        translateX: 250,
        offset: 0,
        easing: "easeInOutSine"
      })
      .add({
        targets: "#penner .InOutExpo",
        translateX: 250,
        offset: 0,
        easing: "easeInOutExpo"
      })
      .add({
        targets: "#penner .InOutCirc",
        translateX: 250,
        offset: 0,
        easing: "easeInOutCirc"
      })
      .add({
        targets: "#penner .InOutBack",
        translateX: 250,
        offset: 0,
        easing: "easeInOutBack"
      });
  }
  render() {
    return (
      <div className="landing-animation">
        <div id="penner" className="bottom-align">
          <div className="line">
            <div
              className="square small stretched linear"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched linear"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched linear"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched OutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCubic"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuart"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutQuint"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutSine"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutExpo"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutCirc"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InOutBack"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched linear"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
          <div className="line">
            <div
              className="square small stretched InQuad"
              style={{ transform: "translateX(0px)" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingAnimation;
