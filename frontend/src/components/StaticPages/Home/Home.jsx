import React, { Component } from "react";
import Footer from "../../Partials/Footer/Footer.jsx";
import { Redirect } from "react-router-dom";

import { apiRoot } from "../../../utils/constants/endpoints.js";
import { axiosCaptcha } from "../../../utils/api/fetch_api.js";
import { IS_CONSOLE_LOG_OPEN } from "../../../utils/constants/constants.js";
import { jobHaxClientId, jobHaxClientSecret } from "../../../config/config.js";
import { Button } from "antd";

import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };

    this.generateSignupButton = this.generateSignupButton.bind(this);
  }

  generateSignupButton() {
    let redirect =
      window.location.pathname === "/alumni" ? "alumni/signup" : "/signup";
    return (
      <Button
        type="primary"
        size="large"
        onClick={() => this.setState({ redirect: redirect })}
      >
        Read More
      </Button>
    );
  }

  generateInteriorItem(imageLink, header, body) {
    return (
      <section className="interior_area">
        <div className="row">
          <img src={window.location.origin + imageLink} alt="" />
          <div className="text-group">
            <h4>{header}</h4>
            <p className="small-text">{body}</p>
            {this.generateSignupButton()}
          </div>
        </div>
      </section>
    );
  }

  generateInteriorItemFlipLR(imageLink, header, body) {
    return (
      <section className="interior_area">
        <div className="row flipLR">
          <div className="text-group">
            <h4>{header}</h4>
            <p className="small-text">{body}</p>
            {this.generateSignupButton()}
          </div>
          <img src={window.location.origin + imageLink} alt="" />
        </div>
      </section>
    );
  }

  generateHomePageFirstItem() {
    return (
      <div className="homepage-first-item">
        <div className="content-big-container">
          <div className="content-container">
            <h4>Azerbaijani Tech Community</h4>
            <p className="small-text">
              Promising people with unpromising ideas!
            </p>
            {/* <div className="buttons-container">
              <Button
                onClick={() =>
                  this.setState({ redirect: "/demo?type=student" })
                }
                size="large"
              >
                Try it out!
              </Button>
              {this.generateSignupButton()}
            </div> */}
          </div>
        </div>
        <div className="image-big-container">
          <div className="image-container">
            {/* <img
              className="envelopes"
              src={
                window.location.origin +
                "/src/assets/images/gmail_envelopes.png"
              }
            ></img> */}
            <img
              className="dashboard-main"
              src={
                window.location.origin + "/src/assets/images/banner.png"
              }
            ></img>
          </div>
        </div>
      </div>
    );
  }

  generateHowItWorksArea() {
    return (
      <div className="how_it_works_area" id="howitworks">
          {/* {this.generateInteriorItem(
          "/src/assets/images/chapter01.png",
          "02hero",
          "Get mentored by top tech community members."
        )} */}
       
        {window.screen.availWidth > 800
          ? this.generateInteriorItem(
              "/src/assets/images/companies.png",
              "Mission",
              "Build egoless, collaborative, competent, decentralized, scalable, fun community culture."
             
            )
          : this.generateInteriorItem(
              "/src/assets/images/move.png",
              "Organize your job hunting progress",
              "Application process is visualized like no spreadsheet can do."
            )}
            {/* {this.generateInteriorItem(
          "/src/assets/images/kiss.png",
          "Kiss Conf",
          "Keep it stupid simple. No more boring conferences."
        )} */}
            
      
        
      </div>
    );
  }

  generateAlumniHomePageFirstItem() {
    return (
      <div className="homepage-first-item">
        <div className="content-big-container">
          <div className="content-container">
            <h4>Job hunt is easier for ITU Alumni!</h4>
            <p className="small-text">
              Stay connected to ITU community get help for your job application
              journey!
            </p>
            <div className="buttons-container">
              <Button
                onClick={() => this.setState({ redirect: "/demo?type=alumni" })}
                size="large"
              >
                Try it out!
              </Button>
              {this.generateSignupButton()}
            </div>
          </div>
        </div>
        <div className="image-big-container">
          <div className="image-container">
            <img
              className="envelopes"
              src={
                window.location.origin +
                "/src/assets/images/gmail_envelopes.png"
              }
            ></img>
            <img
              className="dashboard-main"
              src={
                window.location.origin + "/src/assets/images/dashboard_main.png"
              }
            ></img>
          </div>
        </div>
      </div>
    );
  }

  generateAlumniHowItWorksArea() {
    return (
      <div className="how_it_works_area" id="howitworks">
        {this.generateInteriorItem(
          "/src/assets/images/mail_parse.png",
          "02hero",
          ""
        )}
        {window.screen.availWidth > 800
          ? this.generateInteriorItemFlipLR(
              "/src/assets/images/move.png",
              "Organize your job hunting progress",
              "Application process is visualized like no spreadsheet can do."
            )
          : this.generateInteriorItem(
              "/src/assets/images/move.png",
              "Organize your job hunting progress",
              "Application process is visualized like no spreadsheet can do."
            )}
        {this.generateInteriorItem(
          "/src/assets/images/kiss.png",
          "K.I.S.S - Keep it stupid simple",
          "No more boring conferences."
        )}
      </div>
    );
  }

  render() {
    if (this.state.redirect != null) {
      return <Redirect to={this.state.redirect} />;
    }
    console.log(window.location);
    return (
      <div>
        {window.location.pathname === "/alumni" ? (
          <div className="home-container">
            {this.generateAlumniHomePageFirstItem()}
            {this.generateAlumniHowItWorksArea()}
          </div>
        ) : (
          <div className="home-container">
            {this.generateHomePageFirstItem()}
            {this.generateHowItWorksArea()}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
