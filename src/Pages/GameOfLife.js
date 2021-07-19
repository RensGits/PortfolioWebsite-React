import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './GameOfLife.css'
import Footer from './Components/Footer/Footer';

function GameOfLife () {



    

    return (
        
        <AnimatePresence exitBeforeEnter>
        
        <motion.div className = 'projectBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> "The Game Of Life shows that complex patterns can emerge out of simple rules and offers in that way, an understanding of complex patterns in nature" </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'> After learning DOM manipulation and some degree of Javascript, I challenged myself to rebuild 'The Game of Life' from scratch with the things I knew. The game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. A cellular automaton consists of a regular grid of cells, each in one of a finite number of states such as on and off or in this case, alive or dead. For each cell, a set of cells called its neighborhood is defined relative to the specified cell.  </motion.p>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'buttons'><a href="https://github.com/RensGits/Game-of-life" target="_blank"><button>TO CODE</button></a><a href = 'https://rensgits.github.io/Game-of-life/' target="_blank"><button>TO DEPLOYMENT</button></a></motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.1}} ><img src="https://i.imgur.com/FPisHkW.png" alt=""/></motion.div>
        <Footer /> 
        </motion.div>
        
        </AnimatePresence>
        
    );
}

export default GameOfLife;