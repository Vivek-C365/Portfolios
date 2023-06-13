import React from 'react'
import "../Assets/Project.css";
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import Svm from '../Svm.jpg';
import university from '../university.jpg'
export default function Education() {
  return (
    <>
    
    <section className="education_content" id='Education'>
        <div className="title_education All_head">
            <SchoolTwoToneIcon fontSize="large"/>
            <h1>
                My Education
            </h1>
        </div>
        <div className="outter_edit">

        <div className="education_innercontent">
            <div className="school">

            <div className="school_img">
                <img className='img_school' src={Svm} alt="" />
            </div>
            <div className="scholl_detail">
                <h1 className='Degree_title'> Bachelor Of Computer Application</h1>
                <h5 className='college_name'> Gov. College Malerkotla</h5>
                <h3 className='Year_pass'>2018 - 2021</h3>
            </div>
            </div>
        </div>
        </div>

        <div className="outter_edit">

        <div className="education_innercontent">
            <div className="school">

            <div className="school_img">
                <img className='img_school' src={university} alt="" />
            </div>
            <div className="scholl_detail">
                <h1 className='Degree_title'> Masters Of Computer Application</h1>
                <h5 className='college_name'> Punjabi University Patiala</h5>
                <h3 className='Year_pass'>2022 - 2024</h3>
            </div>
            </div>
        </div>
        </div>
    </section>

    
    </>
  )
}
