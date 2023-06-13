import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Socialicons() {
  return (
    <>
      <a target="blank" href="https://www.instagram.com/vivekchoudhar.y/">
        <div className="media">
          <InstagramIcon className="InstagramIcon" />
        </div>
      </a>

      <a target="blank" href="https://github.com/Vivek-C365">
        <div className="media">
          <GitHubIcon className="GitHubIcon" />
        </div>
      </a>
      <a href="https://m.facebook.com/profile.php?id=100076837974318&_rdr">
        <div className="media">
          <FacebookIcon className="FacebookIcon" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/vivek-choudhary-880207191/">
        <div className="media">
          <LinkedInIcon className="LinkedInIcon" />
        </div>
      </a>
    </>
  );
}
