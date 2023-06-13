import React from "react";
import "../Assets/Project.css";
import contact from "../contact.png";
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
export default function Contact() {
  return (
    <>
<section class="contact" id="Contact">
  
<div className="About_title All_head heading_project">
              <ForumTwoToneIcon fontSize ="Large"/>
          <h1> Get In Touch</h1>
        </div>

  <div class="container">
    <div class="content">
      <div class="image-box">
        <img draggable="false" src={contact} alt=""/>
      </div>
    <form id="contact-form">
      
      <div class="form-group">
        <div class="field">
          <input type="text" name="name" placeholder="Name" required/>
          <i class='fas fa-user'></i>
        </div>
        <div class="field">
          <input type="text" name="email" placeholder="Email" required/>
          <i class='fas fa-envelope'></i>
        </div>
        <div class="field">
          <input type="text" name="phone" placeholder="Phone"/>
          <i class='fas fa-phone-alt'></i>
        </div>
        <div class="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i class="fas fa-comment-dots"></i>
        </div>
        </div>
      
      <div className="about_btn">
          <button className="AboutMe">Submit</button>
        </div>
      
    </form>
  </div>
  </div>
</section>
    </>
  );
}
