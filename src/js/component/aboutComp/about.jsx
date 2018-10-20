import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";
import self_img from "../../../img/self_Image.jpg"; 

class About extends Component{
    render(){
        return(
            <div className="containerForAbout">
                <h3 className="aboutMe">About Me</h3>
                <div className="aboutMeImg">
                    <img className="selfie" src={self_img}/>
                    <p className="introPar">Allow me to introduce myself&#x2c; my name is Florencia Viera&#x2c; I&#x27;m a driven developer with a focus 
                    on Front End Web Development. Recent project work 
                    and studies have been centered on expanding and 
                    refining technical skillset&#x2c; particularly with 
                    JavaScript&#x2c; HTML/CSS and React. I&#x27;m Interested in 
                    opportunities where I will be able to continue to 
                    foster my passion and skills and drive success for 
                    an organization.</p>
                    <p className="quote"><i>&#x22;First&#x2c; solve the problem. Then&#x2c; write the code&#x22;</i></p>
                </div>
            </div>    
            );
    }
}

export default About; 

