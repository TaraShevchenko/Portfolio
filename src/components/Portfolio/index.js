import React from 'react';
import style from './style.module.scss';
import MortalKombat from '../../assets/MortalKombat.png';
import Waychat from '../../assets/Waychat.png';
import cityCalculate from '../../assets/CityCalculate.png';
import {NavLink} from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="container">
            <div className={style.portfolioIPage}>
                <div className={style.portfolioItemWrapper}>
                    <NavLink to="/MK/chose" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>
                        <img src={MortalKombat} alt="MortalKombat"/>

                        <div className={style.description}>
                            <div className={style.title}>MORTAL KOMBAT</div>
                            <div className={style.text}>
                                In this app i practise with vanilla js, such and functions and classes, with
                                async js - Promise and Fetch. I developed this app while attending JS Marathon for Zar Zakharov course.
                            </div>

                        </div>

                    </NavLink>
                </div>

                <div className={style.portfolioItemWrapper}>
                    <NavLink to="/WayChat" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>
                        <img src={Waychat} alt="Waychat"/>
                        <div className={style.description}>
                            <div className={style.title}>WAY CHAT</div>
                            <div className={style.text}>
                                This is my sandbox for learning react and redux. Here I experiment with different
                                libraries and state management. In this app i use React, Redux, React-Redux, React-Router-Dom, React-Bootstrap.
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className={style.portfolioItemWrapper}>
                    <NavLink to="/WayChat" className={style.portfolioItem}>

                        <div className={style.questionMark}>

                        </div>
                        <img src={cityCalculate} alt="cityCalculate"/>
                        <div className={style.description}>
                            <div className={style.title}>CIVILIZATION CITY CALCULATE</div>
                            <div className={style.text}>
                               This is my first-app for board game Civilization. This app is used for calculating in-game economics
                            </div>
                        </div>
                    </NavLink>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;