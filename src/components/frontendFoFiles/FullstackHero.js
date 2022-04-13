import React from 'react';
import Button from '../commonfiles/Button';
import VID2 from '../../videos/video-3.mp4';
import VideoPlayer from "react-video-js-player"


const FullstackHero =(props)=>{
    const VideoSrc = VID2
    return (<div className="container-fluid fullstackhero">
        <div className="row mx-5">
            <div className="col-md-6">
            <h3>{props.title}</h3>
            <table>
                <thead>
                    <tr>
                        <td width="120" className="paddingLeft">Year of Entry</td>
                        <td>{props.year}</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Start Date</td>
                        <td>{props.date}</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft"> Location</td>
                        <td>{props.location}</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Duration</td>
                        <td>{props.duration}</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Attendance</td>
                        <td>{props.attendance}</td>
                    </tr>
                </thead>
            </table>

            <div className="row justify-content-md-center mt-5">
                <div className="col-md-6 ">

                    <Button 
                        class="white_button mb-2"
                        btnName="Apply Now: Weekday"
                        link="/apply"
                    />
                </div>
                <div className="col-md-6 ">


                <Button
                    class="blue_button "
                    btnName="Apply Now: Weekend"
                    link="/apply"

                    />
                </div>
            </div>
            </div>
            <div className="col-md-6 small-vid">
            <VideoPlayer 
            src={VideoSrc}
            playBackRates={[0.5,1,3.85,16]}
            />
             </div>
        </div>
    </div>)
}
export default FullstackHero;