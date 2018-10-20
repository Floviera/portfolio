import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react"; 

class Header extends Component{
    render(){
        return(
            <div className="containerForHeader">
                <h1 className="headerTitleOne">Hello&#x2c; my name is <span className="florencia">Florencia</span>,<br />
                I&#x27;m a <span className="front-end">Front End Web Developer</span><br />
                from <span className="southflo">South Florida</span>.</h1>
                
                <div className="mediaButton">
                    <button type="button" className="btn btn-outline-dark"><i className="fa fa-github"> Github</i></button>
                    <button type="button" className="btn btn-outline-dark"><i className="fa fa-linkedin"> LinkedIn</i></button>
                </div>
                
                <br/>
                <div align="center" className="socialbtns">
                </div>    
                <br/>
                <br />
                        
            </div>
            );
    }
}

export default Header;     



