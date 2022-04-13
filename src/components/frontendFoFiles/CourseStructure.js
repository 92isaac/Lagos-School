import React from 'react';
import "./Fullstack.css"
// import { StackNavbar } from './StackNavbar';


const CourseStructure =(props)=>{

    return <>
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <p className="text-center">Courses</p>
                <h3 className="text-center"> Structure</h3>
                <p>{props.text1}</p>

                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </div>
        </div>

{/* <StackNavbar /> */}

  
</div>
</>
}

export default CourseStructure;