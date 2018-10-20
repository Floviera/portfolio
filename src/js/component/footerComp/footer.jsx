import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <p className="footerpar"> Made with love by&#x2c; Florencia Viera
                    <i className="heart">&#x2665;</i>
                </p>
            </div>
            
            );
    }
}
export default Footer; 

