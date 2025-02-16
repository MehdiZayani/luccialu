"use client";
import style from './slideshow.module.scss'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
import Photo from "../images/Fenetre Alu 1600x850.jpg";
const buttonStyle = {
    width: "50px",
    height:"50px",
    background: 'none',
    border: '0px',
    color:"white"
};


const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg></button>
}
const Example = () => {
    const images = [
        "https://static.wixstatic.com/media/654887_4c379563f99c476cbff734548168c3ca~mv2.jpeg/v1/fill/w_1024,h_511,al_c,q_85,enc_auto/654887_4c379563f99c476cbff734548168c3ca~mv2.jpeg",
        "https://i.ibb.co/B55xbYj4/Fenetre-Alu-1600x850.jpg",
        "https://i.ibb.co/3hG3XKP/savoy.jpg",
    ];

    return (
        <div className={style.main}>
            <Fade className={style.slide} {...properties} duration={2000}>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>FABRICATION</p>

                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>POSE</p>

                        </div>
                    </div>
                </div>
                <div className={style.eachslideeffect}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <div className={style.card}>
                        </div>
                        <div className={style.subcard}>
                            <p className={style.title}>CONCEPTION</p>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Example;