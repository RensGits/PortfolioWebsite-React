import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Nav () {

    return (
        <nav>
            <Link to = '/'>RD</Link>
            <Link></Link>
            <Link to = '/projects'>PROJECTS</Link>
            <Link to = 'contact'>CONTACT</Link>
        </nav>
    );
}

export default Nav;