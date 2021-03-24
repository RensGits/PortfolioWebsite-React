import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player'
import './Somzoa.css'
import './Pages.css'



function Somzoa () {
    return (
        
        <motion.div className = 'somzoaBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}}>
        
        
        <p className = 'quoteHeader'> " My work at Somzoa was the the perfect combination of science and design, an amazing opportunity" </p>
        <p className = 'infoText'> When I started to learn coding I wanted to set myself a goal to work towards. 'Virus' is the product of this journey. I didn't want to be too occupied with back-end functionality, but rather get familiar with layouts and the whole process of publishing a product from scratch. Flutter / Dart seemed like a great candidate for this as it offered a lot of functionality out of the box and an intuitive widget based system. </p>
        <div className = 'buttons'><a href="https://soundcloud.com/user-515726291" target="_blank"><button>TO SOUNDCLOUD</button></a></div>
        <div className = 'szSectionTwo'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=71Sa5iCWuU8"
                controls
                playbackRate = {1}
                width = "896px"
                height = "504px"
            />
        </div>
        <div className = 'szSectionThree'>
        <ReactPlayer height = '70vh' width = '45.5vh'
        url="https://soundcloud.com/user-515726291/forclaz-11-250"
        />
        <ReactPlayer height = '70vh' width = '45.5vh'
        url="https://soundcloud.com/user-515726291/lhfor"
        />
        <ReactPlayer height = '70vh' width = '45.5vh'
        url="https://soundcloud.com/user-515726291/perfect-midnight"
        />
        <ReactPlayer height = '70vh' width = '45.5vh'
        url="https://soundcloud.com/user-515726291/enkinshon"
        />
        
        
        </div>
        <div></div>
        <div className = 'szSectionFour'>
        <ReactPlayer
                url="https://www.youtube.com/watch?v=ucm32EmtXYk"
                controls
                playbackRate = {1}
                width = "896px"
                height = "504px"
            />

        
        </div>
        
        
        <div className = 'footer'><div className = 'footerLine'></div><p className = 'footerText'>This website was build in React from scratch.</p></div>
        
        </motion.div>
        
    );
}

export default Somzoa;