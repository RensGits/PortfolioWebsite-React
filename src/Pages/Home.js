import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ProjectItem from './Components/ProjectItem/ProjectItem';
import './Components/ProjectItem/ProjectItem.css';
import Footer from './Components/Footer/Footer';





function Home () {
    return (
       
        
        <AnimatePresence exitBeforeEnter>
         
        <motion.div key = 'home'  className = 'homeBody' initial = {{opacity: 0, x:0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration:1}}>
        <motion.p className = 'hi' initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}}>Hi! I'm Rens van Driel, a self taught Front-end Engineer / UI-designer. Check out some of my work below.</motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'cV'>Download my CV</motion.p>
        <motion.div key = 'projectbody' exit = {{opacity: 0}} className = 'projectBody' >
        <ProjectItem blockright = 'projectBlockRight brownobrown '  link = '/virus' className = 'projectImageThree' image = 'https://i.imgur.com/7hVFTpz.png' duration = '1' projectname = 'Virus - learn something' category = 'Dart / flutter'description = 'VIRUS is a playstore live application that gives information on clinically imortant viruses. Virus was my first ever coding project and thought me alot about the road from setting up a project to finalising publication.'  />
        <ProjectItem blockright = 'projectBlockRight' link = '/gameoflife' className = 'projectImage' image = 'https://i.imgur.com/4Wi2oCu.png' duration = '1.2' projectname = 'Game of Life' category = 'Javascript' description = "A vanilla Javascript build of John Conway's 'Game of Life' using CSS Grid and DOM manipulation" />
        <ProjectItem blockright = 'projectBlockRight' link = '/weeddoctor' className = 'projectImage' image = 'https://i.imgur.com/SuW4e4x.png' duration = '1.2' projectname = 'Weed Doctor' category = 'Dart / flutter' description = 'Weed Doctor is an application that helps users identify plant diseases based on visual keys in the leaves. ' />
        <ProjectItem blockright = 'projectBlockRight sixosix' link = 'naturalis' className = 'projectImageTwo' image = 'https://i.imgur.com/i0lwYR7_d.webp?maxwidth=760&fidelity=grand' duration = '1.4' projectname = 'Naturalis' category = 'Research / 3D modeling' description = 'At Naturalis Biodiversity Centre I did evolutionairy research into two winged insects. This work had an interesting design element to it...'   />
        <ProjectItem blockright = 'projectBlockRight' link = 'somzoa' className = 'projectImageFour'image = 'https://i.imgur.com/Wzd5RhN.png' duration = '1.6' projectname = 'Somzoa' category = 'Branding / Mixed media' description = 'In my spare time I like to produce interesting experiences with music, imagery and video. Somzoa is the internet identiy that I created to do this.' />
        </motion.div>
        <Footer />
        </motion.div>
      
        </AnimatePresence>
     
    );
}

export default Home;

