import React from 'react';
import '../ProjectItem/ProjectItem.css';
import {AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import {useState} from 'react';
import { Link } from 'react-router-dom';


function ProjectItem (props) {
    const [proportions,setProportions] = useState ('30% 100%')

    const [opacityBlockLeft, setOpcacityBlockLeft] = useState ('1')
    const [height, setHeight] = useState ('35vh')
    return (
        <AnimatePresence exitBeforeEnter>
        <motion.div key = 'item' layout className = 'projectItem' onMouseEnter = {
            function Animation() {
                setProportions ('0% 100%'); setOpcacityBlockLeft ('0')}

    const [opacityBlockLeft, setOpcacityBlockLeft] = useState (1)
    const [durationText, setDurationText] = useState (0.1)
    return (
        <AnimatePresence>
        <motion.div  className = 'projectItem' 
            onMouseEnter = {
                function Animation() {
                setProportions ('0% 100%'); setOpcacityBlockLeft (0); setDurationText (0.01 )}

                } 
            onMouseLeave = {
                    function Animation() {setProportions ('30% 100%'); setOpcacityBlockLeft (1); setDurationText (1)}
                    } 

            initial = {{y: -100, 'grid-template-columns': '30% 100%', height: height, opacity: 1}} 
            animate = {{y:0, 'grid-template-columns': proportions, height: height, opacity: 1}} 
            exit = {{y: 0, opacity: 0}} 

            initial = {{y: -100, 'grid-template-columns': proportions}} 
            animate = {{y:0, 'grid-template-columns': proportions }} 
            exit = {{y: 0, 'grid-template-columns': proportions }} 
            transition = {{duration: props.duration}} >
                
            <motion.div className = 'projectBlockLeft' >
                <motion.p className = 'projectTitle' 
                    inital = {{opacity: opacityBlockLeft}} animate ={{opacity: opacityBlockLeft}} exit = {{opacity: opacityBlockLeft}} transition = {{duration: durationText, delay: durationText}}
                     >
                       
                {props.projectname}
                </motion.p>
                
                <motion.p className = 'projectDescription' inital = {{opacity: opacityBlockLeft}} animate ={{opacity: opacityBlockLeft}} exit = {{opacity: opacityBlockLeft}} transition = {{duration: durationText, delay: durationText }}>{props.description}</motion.p>
                <motion.p className = 'projectCategory' inital = {{opacity: opacityBlockLeft}} animate ={{opacity: opacityBlockLeft}} exit = {{opacity: opacityBlockLeft}} transition = {{duration: durationText, delay: durationText}}>{props.category}</motion.p>
            </motion.div>
            <motion.div className = 'projectOverlay' whileHover = {{opacity: 0.7}} >
            <Link to = {props.link} className = 'button'>TO PROJECT</Link>

                <button onClick>TO PROJECT</button>

                <p className = 'v'>v</p>
            </motion.div>
            <div className = 'projectBlockRight'>
            
                <img className = {props.className} src= {props.image} alt=""/>
                
            </div>
            
        </motion.div>
        </AnimatePresence>

    );
}


export default ProjectItem;


