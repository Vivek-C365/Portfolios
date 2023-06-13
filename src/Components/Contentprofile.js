import React from "react";
import profile_img from "../profile_img.png";
import "../Assets/ContentProfile.css";
import GlitchText from "react-glitch-effect/core/GlitchText";
import KeyboardArrowDownTwoToneIcon from "@material-ui/icons/KeyboardArrowDownTwoTone";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";
import Socialicons from "./Social_icons/Socialicons";

export default function Contentprofile() {
  return (
    <>
      <section className="first_section" id="home">
        <section className="Content_section">
          <div className="title_name">
            <h1 className="hi_there"> Hi There,</h1>
            <h1 className="Vivek_Choudhary"> I'm Vivek Choudhary</h1>
          </div>
          <div className="changeable">
            <h2 className="changeable_line">
              I Am into
              <span className="typing-text">
                <GlitchText>
                  <span id="typewriter">
                    <Typed
                      strings={[
                        "Full Stack Developer",
                        "Web Designing",
                        "Web Development",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </span>
                </GlitchText>
              </span>
            </h2>
          </div>
          <div className="about_btn">
            <button className="AboutMe">
              <NavLink className="nav-link" to="/About">
                About ME <KeyboardArrowDownTwoToneIcon />
              </NavLink>
            </button>
          </div>
          <div className="social_media">
          <Socialicons/>
              
          </div>
        </section>
        <section className="profile_pic">
          <div className="profile_img">
            <img className="face_img" src={profile_img} alt="" />
          </div>
        </section>
      </section>
    </>
  );
}
