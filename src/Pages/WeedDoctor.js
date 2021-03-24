
import React from 'react';
import {motion} from 'framer-motion';
import './WeedDoctor.css';
import './Pages.css';

function WeedDoctor () {
    return (
        
        <motion.div className = 'weedDoctorBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} >
        
        
        <p className = 'quoteHeader'> " Weed Doctor is an Android application that helps users diagnose different plant pathologies based on visual keys in the leaves " </p>
        <p className = 'infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique necessitatibus nam accusantium id, facilis hic molestiae illum corporis delectus quaerat excepturi sunt quia rem nobis. Optio nobis corrupti est saepe, recusandae labore ad, consectetur repellendus commodi illo eos velit, molestiae similique iste ipsam dolores vel? Repellendus ab dolor neque earum facilis porro saepe deleniti ipsum vel, sit temporibus maiores? </p>
        <div className = 'buttons'><a href="https://github.com/ChristianvdBroeck/wdApp" target="_blank"><button>TO CODE</button></a></div>
        <div className = 'wdsectionTwo'><img className = 'wdOverviewImg'  src='weedDoctorOverview.png' alt=""/></div>
        <div className = 'wdsectionThree'><img className = "wdFigmaImg" src="wdFigma.png" alt=""/></div>
        <div className = 'wdsectionFour'><img className = 'wdFlowchartImg' src="wdFlowchart.png" alt=""/></div>
        <div></div>
        <div className = 'footer'><div className = 'footerLine'></div><p className = 'footerText'>This website was build in React from scratch.</p></div>
        
        </motion.div>
        
    );
    }
    export default WeedDoctor

