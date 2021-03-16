import React from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from './Components/ProjectItem/ProjectItem';
import Scrollbar from 'smooth-scrollbar';


function Home () {
    return (
        <div className = 'homeBody'>
            <p></p>
            <p>Hi! I'm Rens van Driel, a self taught UX / UI-designer. Check out some of my work below.</p>
            <Link>Download my CV</Link>
            <p></p>
            <div className = 'projectBody'>
            < ProjectItem />
            < ProjectItem />
            < ProjectItem />
            < ProjectItem />
            </div>
        </div> 

    );
}

export default Home;