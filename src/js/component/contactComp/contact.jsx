import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from "react";

class Contact extends Component {
    render(){
        return(
            <div className="containterContact">
                <div><h3 id="contactpage"className="contactMe">Contact?</h3>
                    <form id="form" className="topBefore">
                        <input id="name" type="text" placeholder="NAME"/>
                        <input id="email" type="text" placeholder="E-MAIL"/>
                        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                        <input id="submit" type="submit" value="SEND"/>
                    </form>
                </div>
            </div>    
            );
    }
}

export default Contact; 