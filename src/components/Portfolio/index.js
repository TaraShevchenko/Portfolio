import React from 'react';
import style from './style.module.scss';
import MortalKombat from './assets/Mortal.png';
import Waychat from './assets/WayChat.png';
import cityCalculate from './assets/Civa.png';

const Portfolio = () => {
    return (
        <div className="customContainer">
            <div className={style.portfolioIPage}>
                <div className={style.portfolioItemWrapper}>
                    <a target="_blank" rel="noreferrer nofollow" href="/https://mkgame.netlify.app/" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>

                        <div className={style.imageWrapper}>
                            <img src={MortalKombat} alt="MortalKombat"/>
                        </div>

                        <div className={style.description}>
                            <div className={style.title}>MORTAL KOMBAT</div>
                            <div className={style.text}>
                                In this app i practise with vanilla js, particularly with functions and classes,
                                async js - Promise and Fetch. I developed this app while attending JS Marathon for Zar
                                Zakharov course.
                            </div>

                        </div>

                    </a>
                </div>

                <div className={style.portfolioItemWrapper}>
                    <a href="https://way-chat.netlify.app/" target="_blank" rel="noreferrer nofollow" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>

                        <div className={style.imageWrapper}>
                            <img src={Waychat} alt="Waychat"/>
                        </div>

                        <div className={style.description}>
                            <div className={style.title}>WAY CHAT</div>
                            <div className={style.text}>
                                This is my sandbox for learning react and redux. Here I am experimenting with different
                                libraries and state management. In this app i use React, Redux, React-Redux,
                                React-Router-Dom, React-Bootstrap.
                            </div>
                        </div>
                    </a>
                </div>

                <div className={style.portfolioItemWrapper}>
                    <a target="_blank" rel="noreferrer nofollow" href="/https://civilization.netlify.app/" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>

                        <div className={style.imageWrapper}>
                            <img src={cityCalculate} alt="cityCalculate"/>
                        </div>

                        <div className={style.description}>
                            <div className={style.title}>CIVILIZATION CITY CALCULATE</div>
                            <div className={style.text}>`
                                This is my first-app for board game Civilization. This app is used for calculating
                                in-game economics.
                            </div>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;