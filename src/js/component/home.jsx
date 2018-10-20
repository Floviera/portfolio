import React from 'react';
import ReactDOM from 'react-dom';
import Header from './headerComp/header.jsx';
import Navbar from './navbarComp/navbar.jsx';
import Projects from './projectsComp/projects.jsx';
import About from './aboutComp/about.jsx';
import Contact from './contactComp/contact.jsx';
import Skills from './skillsComp/skills.jsx';
import Material from './materialComp/material.jsx';
import Footer from './footerComp/footer.jsx';


//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center">
                <Navbar />
                <Header />
                <Material />
                <About /> 
                <Contact />
                <Footer />
            </div>
        );
    }
}


