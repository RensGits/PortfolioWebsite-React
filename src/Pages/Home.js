import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import {Link} from 'react-router-dom';
import ProjectItem from './Components/ProjectItem/ProjectItem';



function Home () {
    return (
        <AnimatePresence>
        <motion.div  className = 'homeBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration:1}}>
            <p></p>
            <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}}>Hi! I'm Rens van Driel, a self taught UX / UI-designer. Check out some of my work below.</motion.p>
            <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'cV'>Download my CV</motion.p>
            <p></p>
            <div  className = 'projectBody' >
            <ProjectItem duration = '1' projectname = 'Virus - learn something' category = 'Dart / flutter application'description = 'VIRUS is a playstore live application that gives information on clinically imortant viruses. Virus was my first ever coding project and thought me alot about the road from setting up a project to finalising publication.'  />
            <ProjectItem className = 'projectImage' image = 'weedDoctorOverview.png' duration = '1.2' projectname = 'Weed Doctor' category = 'Dart / flutter application' description = 'Weed Doctor is an application that helps users identify plant diseases based on visual keys in the leaves. ' />
            <ProjectItem className = 'projectImageTwo' image = 'tipula.png' duration = '1.4' projectname = 'Naturalis' category = 'Research / 3D modeling' description = 'At Naturalis Biodiversity Centre I did evolutionairy research into two winged insects. This work had an interesting design element to it...'   />
            <ProjectItem duration = '1.6' projectname = 'Somzoa' category = 'Branding / Music production' description = 'In my spare time I like to produce interesting experiences with music, imagery and video. Somzoa is the internet identiy that I created' />
            </div>
        </motion.div> 
        </AnimatePresence>
    );
}

export default Home;