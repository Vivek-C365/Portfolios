import React from "react";
import "../Assets/Project.css";
import DevicesIcon from "@material-ui/icons/Devices";
import RemoveRedEyeOutlinedIcon from "@material-ui/icons/RemoveRedEyeOutlined";
import {Link}  from "react-router-dom";

export default function ProjectWork() {
  return (
    <>
      <section className="Project_work" id="Work">
        <div className="heading_project All_head">
          <DevicesIcon fontSize="large" />
          <h1>
            Project
            <span className="special_font">Made</span>
          </h1>
        </div>


        <div className="project_content">
          <div className="project_img project8">
            <div className="project_items">
              <div className="heading">
                <h3>Society Management</h3>
              </div>
              <div className="project_btnout">
                <div className="project_btn">
                <a href="https://individualized-adve.000webhostapp.com/">

                  <button>View</button>
                </a>
                  <a href="https://github.com/Vivek-C365/Portfolio">
                  <button>

                  Code
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project_content">
          <div className="project_img ">
            <div className="project_items">
              <div className="heading">
                <h3>PortFolio Website</h3>
              </div>
              <div className="project_btnout">
                <div className="project_btn">
                <a href="https://vivek-c365.github.io/Portfolio/">

                  <button>View</button>
                </a>
                  <a href="https://github.com/Vivek-C365/Portfolio">
                  <button>

                  Code
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="project_content">
          <div className="project_img project2">
            <div className="project_items">
              <div className="heading">
                <h3>Quotes Website</h3>
              </div>
              <div className="project_btnout">
                <div className="project_btn">
                <Link to="/Work/View/Quote">

                  <button>View</button>
                </Link>
                  <a href="https://github.com/Vivek-C365/Portfolio">
                  <button>

                  Code
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view_btn">
          <Link to="/Work/ViewAll">
          <button className="btn-primary">

            View All <RemoveRedEyeOutlinedIcon />
          </button>
          </Link>
        </div>
      </section>
    </>
  );
}
