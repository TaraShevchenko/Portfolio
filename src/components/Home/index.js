import style from './style.module.scss';
import photo from '../../assets/MyPhoto1.jpg'

const Home = () => {
    return (
        <div className='container'>
            <div className={style.home}>
                <div className={style.avatar}>
                    <img src={photo} alt={photo}/>
                </div>
                <div className={style.details}>
                    <div className={style.name}>
                        TARAS SHEVCHENKO
                    </div>
                    <div className={style.job}>
                        Web developer. Work with React, Redux, Js, Handlebars, HTML/CSS, prepros - sass/less.
                    </div>
                </div>


            </div>
            <div className={style.description}>


                <div className={style.descriptionInner}>

                    <div className={style.left}>
                        <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, id,
                            numquam! Accusamus architecto cum cumque cupiditate deleniti deserunt eos et explicabo ipsa
                            minima nostrum obcaecati odio placeat quod, rerum, similique.
                        </div>
                        {/*<button className={style.button}>Read More</button>*/}
                    </div>

                    <div className={style.right}>
                        <div className={style.rightItem}>
                            <div>Birthday:</div>
                            <div>12.02.2000</div>
                        </div>

                        <div className={style.rightItem}>
                            <div>Age:</div>
                            <div>21</div>
                        </div>

                        <div className={style.rightItem}>
                            <div>Address:</div>
                            <div>Ave 11, New York, USA</div>
                        </div>

                        <div className={style.rightItem}>
                            <div>Email:</div>
                            <div>main@gmail.com</div>
                        </div>

                        <div className={style.rightItem}>
                            <div>Phone:</div>
                            <div>+38(093)572-7997</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;