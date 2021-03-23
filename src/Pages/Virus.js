import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Virus.css'
import './Pages.css'

function Virus () {
    return (
        
        <motion.div className = 'virusBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
        
        
        <p className = 'quoteHeader'> " Virus' is an Android application that provides information on clinically important viruses." </p>
        <p className = 'infoText'> When I started to learn coding I wanted to set myself a goal to work towards. 'Virus' is the product of this journey. I didn't want to be too occupied with back-end functionality, but rather get familiar with layouts and the whole process of publishing a product from scratch. Flutter / Dart seemed like a great candidate for this as it offered a lot of functionality out of the box and an intuitive widget based system. </p>
        <div className = 'buttons'><button>TO CODE</button><button>TO PLAYSTORE</button></div>
        <div className = 'sectionTwo'><img className = 'virusAppImgSectionTop' src="VirusAppImgTop.png" alt=""/></div>
        <div className = 'sectionThree'><img className = 'virusAppImgSectionTwo' src="VirusAppImgSectionTwo.png" alt=""/></div>
        <div className = 'sectionFour'><img className = 'virusAppImgSectionThree' src="VirusAppImgSectionThree.png" alt=""/></div>
        <div className = 'sectionFive'><img className = 'virusAppImgSectionFour' src="VirusAppImgSectionFour.png" alt=""/></div>
        
        <div></div>
        
        </motion.div>
        
    );
}

export default Virus;

//<img className = 'topImage' src="VirusAppImg.png" alt=""/>
        