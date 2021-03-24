import React from 'react';
import { motion } from 'framer-motion';
import './Naturalis.css'
import './Pages.css'

function Naturalis () {
    return (
        
        <motion.div className = 'naturalisBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
        
        
        <p className = 'quoteHeader'> " My work at Naturalis was the the perfect combination of science and design, an amazing opportunity" </p>
        <p className = 'infoText'> When I started to learn coding I wanted to set myself a goal to work towards. 'Virus' is the product of this journey. I didn't want to be too occupied with back-end functionality, but rather get familiar with layouts and the whole process of publishing a product from scratch. Flutter / Dart seemed like a great candidate for this as it offered a lot of functionality out of the box and an intuitive widget based system. </p>
        <div className = 'buttons'><a href="https://github.com/RensGits/Virus-App/blob/main/Virus-App%20v1" target="_blank"><button>TO CODE</button></a><a href = 'https://play.google.com/store/apps/details?id=com.virus.Virus&gl=NL' target="_blank"><button>TO PLAYSTORE</button></a></div>
        <div className = 'sectionTwo'><img className = 'virusAppImgSectionTop' src="VirusAppImgTop.png" alt=""/></div>
        <div className = 'sectionThree'><img className = 'virusAppImgSectionTwo' src="VirusAppImgSectionTwo.png" alt=""/></div>
        <div className = 'sectionFour'><img className = 'virusAppImgSectionThree' src="VirusAppImgSectionThree.png" alt=""/></div>
        <div className = 'sectionFive'><img className = 'virusAppImgSectionFour' src="VirusAppImgSectionFour.png" alt=""/></div>
        <div></div>
        <div className = 'footer'><div className = 'footerLine'></div><p className = 'footerText'>This website was build in React from scratch.</p></div>
        
        </motion.div>
        
    );
}

export default Naturalis;
