import React from 'react';
import '../ProjectItem/ProjectItem.css';
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

function ProjectItem (props) {
    const [proportions,setProportions] = useState ('30% 100%')
    const [opacityBlockLeft, setOpcacityBlockLeft] = useState ('1')
    return (
        <AnimatePresence>
        <motion.div  className = 'projectItem' onMouseEnter = {
            function Animation() {
                setProportions ('0% 100%'); setOpcacityBlockLeft ('0')}
                } 
                onMouseLeave = {
                    function Animation() {setProportions ('30% 100%'); setOpcacityBlockLeft ('1')}
                    } 
            initial = {{y: -100, 'grid-template-columns': '30% 100%'}} 
            animate = {{y:0, 'grid-template-columns': proportions, }} 
            exit = {{y: 0,}} 
            transition = {{duration: props.duration}} >
                
            <motion.div className = 'projectBlockLeft' >
                <motion.p className = 'projectTitle' 
                    inital = {{opacity: 0 }} 
                    animate ={{opacity: 1}}
                    transition = {{duration:2}}
                     >
                       
                {props.projectname}
                </motion.p>
                
                <motion.p className = 'projectDescription' inital = {{opacity:1}} animate ={{opacity: opacityBlockLeft}} >{props.description}</motion.p>
                <motion.p className = 'projectCategory' inital = {{opacity:1}} animate ={{opacity: opacityBlockLeft}} >{props.category}</motion.p>
            </motion.div>
            <motion.div className = 'projectOverlay' whileHover = {{opacity: 0.7}} >
                <button >TO PROJECT</button>
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


