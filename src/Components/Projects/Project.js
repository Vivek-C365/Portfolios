import React from "react";

export default function Project(props) {
  let propimg = props.backimg;

  const backatyle = {
    backgroundImage: `url(${propimg})`,
  };

  return (
    <>
      <div className="project_content">
        <div className="project_img" style={backatyle}>
          <div className="project_items">
            <div className="heading">
              <h3>{props.title}</h3>
            </div>
            <div className="project_btnout">
              <div className="project_btn">
                <a href={props.weblink}>
                  <button>View</button>
                </a>
                <a href={props.codelink}>
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
