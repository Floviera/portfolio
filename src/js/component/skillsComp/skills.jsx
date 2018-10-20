import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";

class Skills extends Component{
    render(){
        return(
            <div className="containerSkills">
                <div className="skillset">
                    <h6 className="skillsTitle">Tools I work with</h6>
                    <div className="skill-lockup">
                        <span className="skill-name mb">JavaScript</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level  communication"></span>
                        </span>
                    </div> 
                    <div className="skill-lockup mr">
                        <span className="skill-name mb">HTML</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level planning"></span>
                        </span>
                    </div>
                    <div className="skill-lockup">
                        <span className="skill-name mb">CSS</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level learning"></span>
                        </span>
                    </div>
                    <div className="skill-lockup mr">
                        <span className="skill-name mb">Bootstrap</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level programming"></span>
                        </span>
                    </div>

                    <div className="skill-lockup">
                        <span className="skill-name mb">React j.s</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level visual-design"></span>
                        </span>
                    </div>

                    <div className="skill-lockup mr">
                        <span className="skill-name mb">Flux</span><span className="skill-status"></span>
                        <span className="skill-bar">
                            <span className="skill-level ux-design"></span>
                        </span>
                        
                        <div className="skill-lockup">
                            <span className="skill-name mb">Python</span><span className="skill-status"></span>
                            <span className="skill-bar">
                                <span className="skill-level python"></span>
                            </span>
                        </div>
                            
                        <div className="skill-lockup">
                            <span className="skill-name mb">Django</span><span className="skill-status"></span>
                            <span className="skill-bar">
                                <span className="skill-level django"></span>
                            </span>
                                
                            <div className="skill-lockup">
                                <span className="skill-name mb">API&#x27;s</span><span className="skill-status"></span>
                                <span className="skill-bar">
                                    <span className="skill-level api"></span>
                                </span>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Skills; 