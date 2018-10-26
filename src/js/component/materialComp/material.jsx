import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Component} from "react";
import postcard from "../../../img/postcard.png"; 
import instagram from "../../../img/instagram2.png"; 
import todo from "../../../img/to-do-list.png"; 
import restaurant from "../../../img/restaurant.png"; 

class Material extends Component{
    render(){
        return(
            <div className="project-container">
                <h3 id="projectpage"className="projectHeader">Projects?</h3>
                <div className="material-container">           
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={restaurant} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">E-commerce</h5>
                                <p  className="card-text">An e-commerce website allows user to purchase and sell goods. It combines back-end data with front-end technology. Includes a shopping cart, search bar, categories, registering users and much more.</p>
                                <p className="card-text"><small className="text-muted">React J.S<br />Javascript<br />Python<br />Django<br />Postgresql<br />Boostrap<br />HTML<br />CSS</small></p>
                                <a href="https://github.com/vicks1008/Ghrs" className="btn btn-dark"><i className="fa fa-github"> Github</i></a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={postcard} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Digital Postcard</h5>
                                <p className="card-text">Simple, clean digital postcard that allows you to share and send messages.</p>
                                <p className="card-text"><small className="text-muted html">HTML<br /> CSS</small></p>
                                <a href="https://github.com/Floviera/postcard" className="btn btn-dark"><i className="fa fa-github"> Github</i></a><br />
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={instagram} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Instagram Replica</h5>
                                <p className="card-text">An instragram replica with an animated background that lets you toggle between indivual pictures or a gallery. </p>
                                <p className="card-text"><small className="text-muted">HHTML <br /> CSS <br /> Bootstrap</small></p>
                                <a href="https://github.com/Floviera/instagram-replica" className="btn btn-dark"><i className="fa fa-github"> Github</i></a>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="material-container">           
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={todo} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Todo List</h5>
                                <p  className="card-text">A fully functioning todo list that allows you to add, and delete task. Also shows you accurate date and time. </p>
                                <p className="card-text"><small className="text-muted">React j.s <br />Javascript<br />HTML<br />CSS</small></p>
                                <a href="https://github.com/Floviera/To-Do-List" className="btn btn-dark"><i className="fa fa-github"> Github</i></a>
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
                        <div className="card">
                            <img className="card-img-top" src={instagram} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Instagram Replica</h5>
                                <p className="card-text">An instragram replica with an animated background that lets you toggle between indivual pictures or a gallery. </p>
                                <p className="card-text"><small className="text-muted">HHTML <br /> CSS <br /> Bootstrap</small></p>
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

            