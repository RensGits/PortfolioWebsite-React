import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import './Somzoa.css';
import './Pages.css';
import Footer from './Components/Footer/Footer';


function Somzoa () {
    return (
        <AnimatePresence>
        <motion.div className = 'somzoaBody' initial = {{opacity: 0, delay:2}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        
        
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> " Somzoa is meant to hypnotise" </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'> From music, video and soon a short novel, Somzoa is the internet alias I created to publish my more non-commercial work. Somzoa is meant to hypnotize and take you onto an obscure ride. It all started out with some video's of protozoa under a microscope that I had my DLR mounted to. This eventually led to me making a video for the High Focus record label and hosting a stream on Twitch showcasing live microscopy of protozoa, occopanied with experimental bass music. I eventually decided to hop on the music production train myself after years of deep fascination for ambient & bass music. Check out some of my work below.     </motion.p>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} className = 'buttons'><a href="https://soundcloud.com/user-515726291" target="_blank"><button>TO SOUNDCLOUD</button></a></motion.div>
        <motion.div className =  'somzoaProjects'>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.2}} className = 'szSectionTwo'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=71Sa5iCWuU8"
                controls
                playbackRate = {1}
                width = "90vh"
                height = "50vh"
            />
        
        </motion.div>
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.4}} className = 'szSectionThree'>
        <ReactPlayer height = '70vh' width = '100%'
        url="https://soundcloud.com/user-515726291/forclaz-11-250"
        />
        <ReactPlayer height = '70vh' width = '100%'
        url="https://soundcloud.com/user-515726291/lhfor"
        />
        <ReactPlayer height = '70vh' width = '100%'
        url="https://soundcloud.com/user-515726291/perfect-midnight"
        />
        <ReactPlayer height = '70vh' width = '100%'
        url="https://soundcloud.com/user-515726291/enkinshon"
        />
        
        
        </motion.div>
        
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.6}} className = 'szSectionFour'>
        <ReactPlayer 
                url="https://www.youtube.com/watch?v=ucm32EmtXYk"
                controls
                playbackRate = {1}
                width = "100%"
                height = "100%"
            />

        
        </motion.div>
        </motion.div>
        
        <Footer />
        
        </motion.div>
        </AnimatePresence>
    );
}

export default Somzoa;