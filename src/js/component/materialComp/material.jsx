import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Component} from "react";
import postcard from "../../../img/postcard.png"; 
import instagram from "../../../img/instagram2.png"; 

class Material extends Component{
    render(){
        return(
            <div className="project-container">
                <h3 className="projectHeader">Projects</h3>
                <div className="material-container">           
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src="https://bit.ly/2Epsa56" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p  className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Javascript <br />HTML</small></p>
                                <button type="button" className="btn btn-dark"><i className="fa fa-github"></i></button>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={instagram} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Instagram Replica</h5>
                                <p className="card-text">An instragram replica with an animated background that lets you toggle between indivual pictures or a gallery. </p>
                                <p className="card-text"><small className="text-muted">HHTML <br /> CSS <br /> Bootstrap</small></p>
                                <button type="button" className="btn btn-dark"><i className="fa fa-github"></i></button>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={postcard} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Digital Postcard</h5>
                                <p className="card-text">Simple, clean digital postcard that allows you to share and send messages.</p>
                                <p className="card-text"><small className="text-muted html">HTML<br /> CSS</small></p>
                                <button type="button" className="btn btn-dark"><i className="fa fa-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>   
                
            </div>    
                
            );
    }
}

           
export default Material; 

            