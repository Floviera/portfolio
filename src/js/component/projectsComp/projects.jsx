import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react"; 

class Projects extends Component{
    render(){
        return(
            <div>
                <h3 id="projectpage"className="projectHeader">Projects?</h3>
                <div className="wrapper">
                    <a className="a-tag" href="#">
                        <article className="card_wrapper">
                            <div className="project_summary">
                                <h2 className="project_title">E-Commerce Website</h2>
                                <p className="created_date"></p>
                                <p className="project_desc">Enables users to purchase and sell goods.</p>
                                <a href="https://github.com/vicks1008/Ghrs" className="btn btn-dark"><i className="fa fa-github"></i></a>
                            </div>
                        </article>
                    </a>
                  
                    <a className="a-tag" href="#">
                        <article className="card_wrapper">
                            <div className="project_summary">
                                <h2 className="project_title">Todo List</h2>
                                <p className="created_date"></p>
                                <p className="project_desc">Allows users to add, and delete task. Shows accurate date and time.</p>
                                <a href="https://github.com/Floviera/To-Do-List" className="btn btn-dark"><i className="fa fa-github"></i></a>
                            </div>
                        </article>
                    </a>
                  
                    <a className="a-tag" href="https://floviera.github.io/instagram-replica/">
                        <article className="card_wrapper">
                            <div className="project_summary">
                                <h2 className="project_title">Instagram Replica</h2>
                                <p className="created_date"></p>
                                <p className="project_desc">Animated background, lets users toggle between indivual images or a gallery.</p>
                                <a href="https://github.com/Floviera/instagram-replica" className="btn btn-dark"><i className="fa fa-github"></i></a>
                            </div>
                        </article>
                    </a>
                  
                    <a className="a-tag" href="https://floviera.github.io/postcard/">
                        <article className="card_wrapper">
                            <div className="project_summary">
                                <h2 className="project_title">Digital Postcard</h2>
                                <p className="created_date"></p>
                                <p className="project_desc">Simple, clean digital postcard that allows users to share and send messages.</p>
                                <a href="https://github.com/Floviera/postcard" className="btn btn-dark"><i className="fa fa-github"></i></a><br />
                            </div>
                        </article>
                    </a>
                </div>
            </div>
            
            );
    }
}

export default Projects;