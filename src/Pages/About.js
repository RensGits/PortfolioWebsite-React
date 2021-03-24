import React from 'react';
import {motion} from 'framer-motion';
import './About.css'
import './Pages.css'

function About () {
    return (
        <motion.div className = 'aboutBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
        <p className = 'quoteHeader'> " I love to explore and learn. Design and development will allow me to keep doing just that. " </p>
        <p>I’ve always had
              a passion for graphic design, but my interest have shifted over
              the years. I dropped out of artschool after a year of graphic
              design to study biology because I wanted to learn more about how
              things worked, in a theoretical sense. But my passion for design
              has never left me, and I felt that even in biology, I was
              constantly looking to transform the things I was learning in
              something that was more interesting to look at, something that
              made other people intrigued with biology, or simply for my own
              enjoyment. Recently, I’ve started to learn how to code. And ever
              since I started I’ve been hooked. I realised that UI design and Front-end engineering is the perfect career for me.  </p>
        
        <img className = 'clownImg' src="clown.png" alt=""/>
        </motion.div>

    );
}

export default About;