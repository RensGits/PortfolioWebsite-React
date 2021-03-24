import { AnimatePresence,motion } from 'framer-motion';
import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';
import './../Navigationbar/Nav.css';


function Nav () {

    return (
        <AnimatePresence>
        <motion.div className = 'motionDiv' initial = {{opacity: 0, y: -100}} animate = {{opacity: 1, y:0}} exit = {{opacity: 0, y: 0}} transition = {{duration:0.55}}>
        <nav>
            <Link to = '/' className = 'rD'>RD</Link>
            <Link></Link>
            <Link to = '/about' className = 'links'>ABOUT</Link>
            <Link to = '/contact' className = 'links'>CONTACT</Link>
        </nav>
        </motion.div>
        </AnimatePresence>
    );
}

export default Nav;