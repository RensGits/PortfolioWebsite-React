import { motion } from 'framer-motion';
import React from 'react';

function Footer(){


    return(

        <motion.div className = 'footer'>
            <motion.div className = 'footerLine'></motion.div>
            <motion.p className = 'footerText'>This website was build in React from scratch. <a style = {{fontSize: '1em'}} href = 'https://github.com/RensGits/PortfolioWebsite' target="_blank"> ---> </a></motion.p>
            
        </motion.div>
    )
}

export default Footer