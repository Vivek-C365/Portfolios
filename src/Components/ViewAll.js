import React from "react";
import "../Assets/View.css";
import DevicesIcon from "@material-ui/icons/Devices";
import { Link } from "react-router-dom";
export default function ViewAll(props) {
  return (
    <>
      <div className="heading_project All_head view_head">
        <DevicesIcon fontSize="large" />
        <h1 className="project_color">
          Project
          <span className="special_font">Made</span>
        </h1>
      </div>
      <section id="view_all">
        <div className="project_one project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img project_img_viewall"></div>
              </div>
              <div className="flip-card-back">
                <h1>Portfolio Website</h1>

                <a href="https://vivek-c365.github.io/Portfolio/">
                  <button className="view_btn_project">View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_two project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project2 project_img_viewall project_img_center"></div>
              </div>
              <div className="flip-card-back">
                <h1>Quote Website</h1>

                <Link to="/Work/View/Quote">
                  <button className="view_btn_project">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project_three project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img_viewall project3 project_img_center"></div>
              </div>
              <div className="flip-card-back">
                <h1>Sidhu Moose Wala Website</h1>
                <p> SIDHU MOOSE WALA MUSIC TRACKS WEBSITE</p>

                <a href="https://5911.online/">
                  <button className="view_btn_project">View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_forth project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img_viewall project4"></div>
              </div>
              <div className="flip-card-back">
                <h1>Car Service Website</h1>

                <a href="https://onlybigcars.com/">
                  <button className="view_btn_project" disabled>
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_fifth project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img_viewall project5"></div>
              </div>
              <div className="flip-card-back">
                <h1>Affilated Market Website</h1>

                <a href="https://365day.store">
                  <button className="view_btn_project">View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_sixth project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img_viewall project6"></div>
              </div>
              <div className="flip-card-back">
                <h1>Dental Appoinment Website</h1>

                <a href="/">
                  <button className="view_btn_project" disabled>
                    Not Available
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_seven project_card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="project_img_viewall project7 project_img_center"></div>
              </div>
              <div className="flip-card-back">
                <h1>Covid Appoinment Website</h1>

                <a href="/">
                  <button className="view_btn_project" disabled>
                    Not Available
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
