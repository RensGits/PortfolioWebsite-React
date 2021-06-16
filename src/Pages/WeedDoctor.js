
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './WeedDoctor.css';
import './Pages.css';
import Footer from './Components/Footer/Footer';

function WeedDoctor () {
    return (
        
        <AnimatePresence>
            
        <motion.div className = 'projectBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}} >
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> "Weed Doctor should make it easy for users to identify plant pathologies, independent of their prior knowlege of biology" </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'>  Weed Doctor is a Dart / Flutter based Android application that helps users diagnose different plant pathologies based on visual keys in the leaves. With the help of a simple multiple-choice question model, the user can find out what is wrong with his/her plant without having to know anything about biolgy. We have created a matrix that narrows down nutrient deficiencies and nutrient exccess based on different visual keys in the leaves such as shape of discoloration, orientation, color, position and more. After going through a few easy to understand questions, the user will be send to a diagnose page that explains in detail how the pathology could have been caused and what steps they can undertake to fix the problem.   </motion.p>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'buttons'><a href="https://github.com/ChristianvdBroeck/wdApp" target="_blank"><button>TO CODE</button></a></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.1}} className = 'wdsectionTwo'><img className = 'wdOverviewImg'  src='https://i.imgur.com/XtzLh9E.png' alt=""/></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.3}} className = 'wdsectionThree'><img className = "wdFigmaImg" src="https://i.imgur.com/Ao8sCk5.png" alt=""/></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.5}} className = 'wdsectionFour'><img className = 'wdFlowchartImg' src="https://i.imgur.com/Oqw5U0T.png" alt=""/></motion.div>
        <Footer />
        </motion.div>
        
        </AnimatePresence>
        
    );
    }
    export default WeedDoctor

