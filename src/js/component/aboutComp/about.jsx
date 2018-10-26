import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";
import self_img from "../../../img/self_Image.jpg"; 

class About extends Component{
    render(){
        return(
            <div className="containerForAbout">
                <h3 id="aboutmepage"className="aboutMe">About Me?</h3>
                <div className="aboutMeImg">
                    <img className="selfie" src={self_img}/>
                    <p className="introPar">Greetings world? My name is Florencia Viera&#x2c; I&#x27;m a driven developer with a focus 
                    on Front End Web Development. Recent projects and work 
                    have been centered on expanding and 
                    refining technical skillset&#x2c; particularly with 
                    JavaScript&#x2c; HTML/CSS and React. I&#x27;m Interested in 
                    opportunities where I will be able to continue to 
                    foster my passion and skills and drive success for 
                    an organization.</p>
                    <p className="introPar">Fun facts&#x3a; I&#x27;m only 5&#x27;2 but I have been playing basketball since I was 8 years old.
                    I was born in Uruguay but raised in Miami. I have a passion for learning&#x2c; and getting better at everything I do.</p>
                    <p className="quote"><i>&#x22;First&#x2c; solve the problem. Then&#x2c; write the code&#x22;</i></p>
                </div>
            </div>    
            );
    }
}

export default About; 

