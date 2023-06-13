import React from "react";
import "../Assets/Project.css";
import PersonIcon from "@material-ui/icons/Person";
import GetAppTwoToneIcon from "@material-ui/icons/GetAppTwoTone";
import Cv from '../Cv.pdf'
import profile from '../profileimage.jpg'
export default function About() {
  return (
    <>
      <section className="about_content" id="About">
        <div className="About_title All_head heading_project">
          <PersonIcon fontSize="large" />
          <h1>About Me</h1>
        </div>
        <section className="about_first_section">
          <section className="profile_pic">
            <div className="about_img">
              <img
                className="about_profile_img"
                src={profile}
                alt=""
              />
            </div>
          </section>
          <section className="personal_detail">
            <section className="About_Content_section">
              <div className="About_title_name">
                <h1 className="hi_there"> I'm Vivek Choudhary</h1>
                <h4 className="Vivek_Choudhary"> Full Stack Developer </h4>
              </div>
              <div className="About_outter_para">
                <div className="about_para">
                  <p className="About_lines">
                    I am a Full-Stack Developer based in Punjab, India. I am very
                    passionate about improving my coding skills & websites. I build WebApps and Websites using
                    MERN Stack. Working for myself to improve my skills. Love to
                    build Full-Stack clones.
                  </p>
                </div>
              </div>
            </section>
            <section className="simple_detail">
              <div className="detail_inner">
                <span className="about_span">
                  Ages: <h5 className="deatil_text">23</h5>
                </span>
                <span className="about_span">
                  Email: <h5 className="deatil_text">vivek.choudhary.0022@gmail.com</h5>
                </span>
              </div>
              <div className="detail_inner">
                <span className="about_span"> Phone : <h5 className="deatil_text">+91 77103-29748</h5></span>
                <span className="about_span"> Place : <h5 className="deatil_text">Punjab, India -148023</h5>
                </span>
              </div>
            </section>
          </section>
        </section>
        <div className="about_btn">
          <a className="AboutMe" href={Cv}>
          Resume
            <GetAppTwoToneIcon />
          </a>
        </div>
      </section>
    </>
  );
}
