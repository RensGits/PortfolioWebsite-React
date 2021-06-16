import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './About.css';
import './Pages.css';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';

function About () {
    return (
        <AnimatePresence exitBeforeEnter> 
        
        <motion.div  className = 'aboutBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader center'> " I love to create interesting experiences and learn new things on the way. Design and development will allow me to keep doing just that. " </motion.p>
        <motion.img initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'clownImg' src="https://i.imgur.com/t6SS1Nx.png" alt=""/>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.2}} className = 'center'> I’ve always had
              a passion for graphic design, but my interest have shifted over
              the years. I dropped out of artschool after a year of graphic
              design to study biology because I wanted to learn more about how
              things worked, in a theoretical sense. But my passion for design
              has never left me, and I felt that even in biology, I was
              constantly looking to transform the things I was learning in
              something that was more interesting to look at, something that
              made other people intrigued with biology, or simply for my own
              enjoyment. 
              <p> Recently, I’ve started to learn how to code, and ever
              since I started I’ve been hooked. I realised that UI design and Front-end development is the perfect career for me. </p>
               </motion.p>
               
        
        
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.4}} className = 'iconsGrid'>
        <p className = 'experience center'> For now,  I have experience in: </p>
        <div></div>
            <motion.img style = {{width: '100%'}} src="https://i.imgur.com/PVqabhH.png" alt=""/>

        </motion.div>
        <Link to = {'/contact'}><a style = {{fontSize: "1.5em"}}>{"---> Get in touch <---"}</a></Link> 
        
        <Footer />
        </motion.div>
        
        </AnimatePresence>
    );
}

export default About;