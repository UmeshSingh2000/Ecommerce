import React, {useEffect, useState} from 'react'
import heroimage1 from '../assets/121-PP-WEB_1_1000x.jpg'
import heroimage2 from '../assets/190-Desktop-Banner_1000x.jpg'
import heroimage3 from '../assets/RS_Banner_WEB_1_1000x.jpg'
import Mheroimage1 from '../assets/131-mob_500x.jpg'
import Mheroimage2 from '../assets/190-Mobile-Banner_500x.jpg'
import Mheroimage3 from '../assets/RS_Banner_MOB_1_500x.jpg'


const Hero = () => {
    useEffect(()=>{
        const interval = setInterval(() => {
            handleRight();
        }, 4000);
        
        return () => clearInterval(interval);
    })
    const [currentImage, SetcurrentImage] = useState(0)
    const images = [heroimage1, heroimage2, heroimage3];
    const Mobileimages = [Mheroimage1, Mheroimage2, Mheroimage3];
    const handleRight = () => {
        if(currentImage ===images.length - 1){
            SetcurrentImage(0);
        }
        if (currentImage < images.length - 1) {
            SetcurrentImage(currentImage + 1);
        }
    }
    const handleLeft = () => {
        if(currentImage ===0){
            SetcurrentImage(images.length - 1);
        }
        if (currentImage >0) {
            SetcurrentImage(currentImage - 1);
        }
    }
    return (
        <>
            <section className="hero-section">
                <i className="fa-solid fa-circle-chevron-left" onClick={handleLeft}></i>
                <i className="fa-solid fa-circle-chevron-right" onClick={handleRight}></i>
                <img src={images[currentImage]} alt="Image" id='Limages'/>
                <img src={Mobileimages[currentImage]} alt="Image" id='Mimages'/>
            </section>
        </>
    )
}

export default Hero
