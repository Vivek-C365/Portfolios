import React from "react";
import "../Assets/Project.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeveloperModeTwoToneIcon from '@material-ui/icons/DeveloperModeTwoTone';

export default function Experience() {
  return (
    <>
      <section className="exp_content" id="Experience">
        <div className="Exp_title All_head heading_project">
        <DeveloperModeTwoToneIcon fontSize="large"/>
          <h1>Experience</h1>
        </div>

        <div className="Exp_material">
          <div className="line_item">
            <span className="inner_line"></span>
            <span className="circle_item"></span>
          </div>
          <div className="content_box">
                <div className="arrow">
                <span className="single_arrow"><ArrowBackIosIcon/></span>
                </div>
                <div className="detail_box">
                <h1 className="title">Self Employed</h1>
                <h4 className="secnd_title"> Front-End Dveloper</h4>
                <h5 className="time">Aug 2021 - 2022</h5>
                </div>
          </div>
        </div>
        <div className="Exp_material">
          <div className="line_item">
            <span className="inner_line"></span>
            <span className="circle_item"></span>
          </div>
          <div className="content_box">
                <div className="arrow">
                <span className="single_arrow"><ArrowBackIosIcon/></span>
                </div>
                <div className="detail_box">
                <h1 className="title">Self Employed</h1>
                <h4 className="secnd_title"> Full Stack Dveloper</h4>
                <h5 className="time">2023 - Present</h5>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}
