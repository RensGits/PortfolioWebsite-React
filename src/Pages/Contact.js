import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import './Pages.css';

function Contact () {
    
    return (
        
       
    
        <AnimatePresence exitBeforeEnter>
            
            
        <motion.div className = 'contactBody'>
        <div></div>
        <motion.img className = 'gif' initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} src="https://media.giphy.com/media/cJ2PfFYOU4yeEFe4bB/source.gif" alt=""/>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} >Feel free to send me a message. I'll get to you as soon as possible.</motion.p >
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.2}}><ContactForm/></motion.div>
        <Footer />
        </motion.div>
        
        </AnimatePresence>
        
       
    );
}

export default Contact;