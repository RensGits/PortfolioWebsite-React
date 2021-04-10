import React from 'react';
import '../ProjectItem/ProjectItem.css';
import {AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import {useState} from 'react';
import { Link } from 'react-router-dom';




function ProjectItem (props) {
    const [proportions,setProportions] = useState ('30% 100%')
    const [opacityBlockLeft, setOpcacityBlockLeft] = useState ('1')
    
   

    return (
        <AnimatePresence exitBeforeEnter>
        <motion.div key = 'item' layout className = 'projectItem' onMouseEnter = {
            function Animation() {
                setProportions ('0% 100%'); setOpcacityBlockLeft ('0')}
                } 
                onMouseLeave = {
                    function Animation() {setProportions ('30% 100%'); setOpcacityBlockLeft ('1')}
                    } 
            initial = {{y: -100, 'grid-template-columns': '30% 100%',  opacity: 1}} 
            animate = {{y:0, 'grid-template-columns': proportions,  opacity: 1}} 
            exit = {{y: 0, opacity: 0}} 
            transition = {{duration: props.duration}} >
                
            <motion.div className = 'projectBlockLeft' >
                <motion.p className = 'projectTitle' 
                    inital = {{opacity:1}} animate ={{opacity: opacityBlockLeft}}
                     >
                       
                {props.projectname}
                </motion.p>
                
                <motion.p className = 'projectDescription' inital = {{opacity:1}} animate ={{opacity: opacityBlockLeft}} >{props.description}</motion.p>
               
                <motion.p className = 'projectCategory' inital = {{opacity:1}} animate ={{opacity: opacityBlockLeft}} >{props.category}</motion.p>
                
            </motion.div>
            <motion.div className = 'projectOverlay' whileHover = {{opacity: 0.7}} >
            <Link to = {props.link} className = 'button'>TO PROJECT</Link>
                
            </motion.div>
            <div className = {props.blockright}>
            <Link to = {props.link}><button className = 'conditionalButton'>TO PROJECT</button></Link>
                <img className = {props.className} src= {props.image} alt=""/>
                
                
            </div>
            
        </motion.div>
        </AnimatePresence>

    );
}


export default ProjectItem;


