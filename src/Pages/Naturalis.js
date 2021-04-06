import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Naturalis.css';
import './Pages.css';



function Naturalis () {
    return (
        <AnimatePresence>
        <motion.div className = 'naturalisBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> " What can insect genitalia and muscles in the head of larvea tell us about their evolutionairy history?  " </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'> In evolutionary biology, comparing morphology (the form and 
structure) of different species can be used to build a phylogenetic 
tree that shows a hypothesis about the evolutionary history of a 
group or groups of species. Species that share the same derived 
traits can be grouped together, i.e. species that have homologous 
structures. By looking at the form and function of these homologous 
structures, one can try to find patterns that tell if these traits are 
derived or ancestral traits. My work at Naturalis was to see if I could do just this for a long standing problem in evolutionary biology, namely the evolutionary history of flies, scorpidflies and fleas. To do this I made 3D models of the internal structures of different species and compared the form and function to see if we could see any patterns that either confirmed or refuted preliminairy hypothesis. I then worked on integrating these 3D models into scientific publications and now, into this website. </motion.p>
        
      

<model-viewer src="../Assets/Tipula.glb" camera-controls>

<div class="progress-bar hide" slot="progress-bar">
    <div class="update-bar"></div>
</div>
<button slot="ar-button" id="ar-button">
    View in your space
</button>
<div id="ar-prompt">
    <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt = ''></img>
    </div>
</model-viewer>


        <div className = 'footer'><div className = 'footerLine'></div><p className = 'footerText'>This website was build in React from scratch.</p></div>
        
        </motion.div>
        </AnimatePresence>
    );
}

export default Naturalis;
