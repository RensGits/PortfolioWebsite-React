import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Virus.css'
import './Pages.css'

import Footer from './Components/Footer/Footer';

function Virus () {
    return (
        <div>
        <div></div>
        <div>
        <AnimatePresence exitBeforeEnter>
        <div></div>
        <motion.div className = 'virusBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        
        
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> " Virus' is an Android application that provides information on clinically important viruses." </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'> When I started to learn coding I wanted to set myself a goal to work towards. 'Virus' is the product of this process. I didn't want to be too occupied with back-end functionality, but rather get familiar with layouts and the whole process of publishing a product from scratch. Flutter / Dart seemed like a great candidate for this as it offered a lot of functionality out of the box in an intuitive widget based system. </motion.p>
      
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'buttons'><a href="https://github.com/RensGits/Virus-App/blob/main/Virus-App%20v1" target="_blank"><button>TO CODE</button></a><a href = 'https://play.google.com/store/apps/details?id=com.virus.Virus&gl=NL' target="_blank"><button>TO PLAYSTORE</button></a></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.1}} className = 'sectionTwo'><img className = 'virusAppImgSectionTop' src="https://i.imgur.com/7hVFTpz.png" alt=""/></motion.div>
        <div></div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.4}} className = 'sectionThree'><img className = 'virusAppImgSectionTwo' src="https://i.imgur.com/KSQXgxg.png" alt=""/></motion.div>
        <div></div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.6}} className = 'sectionFour'><img className = 'virusAppImgSectionThree' src="https://i.imgur.com/1bidGgz.png" alt=""/></motion.div>
        <div></div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.8}} className = 'sectionFive'><img className = 'virusAppImgSectionFour' src="https://i.imgur.com/oQAp0bM.png" alt=""/></motion.div>
        <motion.div></motion.div>
        <Footer />
        
        </motion.div>
        </AnimatePresence>
        </div>
        <div></div>
        </div>
    );
}

export default Virus;

//<img className = 'topImage' src="VirusAppImg.png" alt=""/>
        