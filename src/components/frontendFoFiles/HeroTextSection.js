import React from 'react'
import Button from '../commonfiles/Button'



const HeroTextSection =(props)=>{
    return <div className="container-fluid herotext">
        <div className="row mx-5 mt-5 ">
            <div className="col">
            <p>{props.header}</p>

<ul>
    <li>{props.list1}</li>

    <li>{props.list2}</li>

    <li>{props.list3}</li>

    <li>{props.list4}</li>

    <li> {props.list5}</li>

    <li>{props.list6}</li>
</ul>

<p>{props.header2}</p>
<p>{props.header3}</p>

<h4><strong>{props.highlight}</strong></h4>

<ul>
    <li>{props.newlist1}</li>

    <li>{props.newlist2}</li>

    <li>{props.newlist3}</li>

    <li>{props.newlist4}</li>
</ul>

<Button 
                link='/'
                class="btn btn-blue border-white btn-color"
                btnName="Download Propectus"
                />


    </div>

        </div>

    </div>
}

export default HeroTextSection;