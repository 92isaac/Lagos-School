import React from 'react'
import { Link } from 'react-router-dom'


const CourseProFile = (props) => {
  return (
    <div className="col-md-6 text-left course">
         <img src={props.courseImg} alt="" className='img-fluid bg-light p-1' />
        <h5>{props.courseTitle}</h5>
        <p>{props.courseDesc}</p>
        <button className="btn btn-outline-primary"><Link className="spacing" to={props.courseLink}>{props.courseLinkTitle}</Link></button>
    </div>
  )
}

export default CourseProFile;