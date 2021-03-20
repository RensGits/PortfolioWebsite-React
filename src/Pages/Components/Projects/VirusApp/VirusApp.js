import React from 'react';
import '../ProjectItem/ProjectItem.css';
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

function VirusApp () {

return (
    <AnimatePresence>
        <motion.div  className = 'homeBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration:1}}>
            <p></p>
            <p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}}>Hi! I'm Rens van Driel, a self taught UX / UI-designer. Check out some of my work below.</p>
            <p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'cV'>Download my CV</p>
            <p></p>
            <div  className = 'projectBody' >
                
            <ProjectItem className = 'projectImageThree' image = 'VirusAppImg.png'duration = '1'   />
            <ProjectItem className = 'projectImage' image = 'weedDoctorOverview.png' duration = '1.2' />
            <ProjectItem className = 'projectImageTwo' image = 'tipulaCropped.png' duration = '1.4'    />
            <ProjectItem duration = '1.6'  />
            </div>
        </motion.div> 
    </AnimatePresence>


    )


}

export default VirusApp;
