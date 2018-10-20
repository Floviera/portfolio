//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';
import '../styles/header/header.scss';
import '../styles/navbar/navbar.scss';
import '../styles/projects/projects.scss';
import '../styles/about/about.scss';
import '../styles/contact/contact.scss';
import '../styles/skills/skills.scss';
import '../styles/material/material.scss';
import '../styles/footer/footer.scss';

//import your own components
import {Home} from './component/home.jsx';

//render your react application
ReactDOM.render(
    <Home />,
    document.querySelector('#app')
);