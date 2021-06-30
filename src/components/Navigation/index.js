import style from './style.module.scss';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div>
                <div className={style.logo}>
                    MENU
                </div>
                <div className={style.menu}>
                    <NavLink to="/" exact className={style.menuItem} activeClassName={style.active}>
                        Home
                    </NavLink>

                    <NavLink to="/portfolio" className={style.menuItem} activeClassName={style.active}>
                        Portfolio
                    </NavLink>
                </div>
                <div className={style.copyright}>
                    © 2021 <br/>
                    Created by Taras Shevchenko
                </div>
            </div>
        </div>
    );
};

export default Navigation;