import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from './Components/ProjectItem/ProjectItem';



function Home () {
    return (
        
        <motion.div key = 'home'  className = 'homeBody' initial = {{opacity: 0, x:0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration:1}}>
            <p></p>
            <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}}>Hi! I'm Rens van Driel, a self taught UX / UI-designer. Check out some of my work below.</motion.p>
            <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'cV'>Download my CV</motion.p>
            <p></p>
            <motion.div key = 'projectbody' exit = {{opacity: 0}} className = 'projectBody' >
                
            <ProjectItem link = '/virus' duration = '1' projectname = 'Virus - learn something' category = 'Dart / flutter application'description = 'VIRUS is a playstore live application that gives information on clinically imortant viruses. Virus was my first ever coding project and thought me alot about the road from setting up a project to finalising publication.'  />
            <ProjectItem link = '/weeddoctor' className = 'projectImage' image = 'weedDoctorOverview.png' duration = '1.2' projectname = 'Weed Doctor' category = 'Dart / flutter application' description = 'Weed Doctor is an application that helps users identify plant diseases based on visual keys in the leaves. ' />
            <ProjectItem link = 'naturalis' className = 'projectImageTwo' image = 'tipula.png' duration = '1.4' projectname = 'Naturalis' category = 'Research / 3D modeling' description = 'At Naturalis Biodiversity Centre I did evolutionairy research into two winged insects. This work had an interesting design element to it...'   />
            <ProjectItem link = 'somzoa' duration = '1.6' projectname = 'Somzoa' category = 'Branding / Music production' description = 'In my spare time I like to produce interesting experiences with music, imagery and video. Somzoa is the internet identiy that I created' />
            </motion.div>
        </motion.div> 
        
    );
}

export default Home;

