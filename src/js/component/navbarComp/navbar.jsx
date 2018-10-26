import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react"; 

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-">
                <a className="navbar-brand" href="#"><span className="fv"><b>FV  </b></span>  &#x7c; Florencia Viera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="file:///Users/florenciaviera/Downloads/career.resume.%20%20(1).pdf" className="nav-link" download><i className="fa fa-download"></i> Resume?<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projectpage">Projects?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutmepage">About Me?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#contactpage">Contact?</a>
                        </li>
                    </ul>
                </div>
            </nav>

            );
    }
}

export default Navbar; 
