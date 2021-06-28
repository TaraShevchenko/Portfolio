import React from 'react';
import style from './style.module.scss';
import MortalKombat from '../../assets/MortalKombat.png';
import Waychat from '../../assets/Waychat.png';
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minima!
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, minima!
                            </div>
                        </div>
                    </NavLink>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;