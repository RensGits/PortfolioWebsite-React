import React from 'react';
import '../ProjectItem/ProjectItem.css';
import {AnimatePresence, motion} from 'framer-motion';

function ProjectItem (props) {
    return (
        <AnimatePresence>
        <motion.div className = 'projectItem' initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: props.duration}}>
            <div className = 'projectBlockLeft'>
                <p className = 'projectTitle'>{props.projectname}</p>
                <p className = 'projectDescription'>{props.description}</p>
                <p className = 'projectCategory'>{props.category}</p>
            </div>
            <div className = 'projectBlockRight'>
                <img className = {props.className} src= {props.image} alt=""/>
            </div>

        </motion.div>
        </AnimatePresence>

    );
}

export default ProjectItem;