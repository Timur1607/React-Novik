import './Header.css'
import HeadTitle from '../headerNav/nav.jsx'
import NovikPicture from '../../img/Denis-Novik.webp'
export default function header(){

    return(
        <>
            <section className="head">
                <div className="container">
                    <HeadTitle/>
                    <hr className="head__hr" />
                    <div className="head__top">
                        <button className="head__burger" >
                            <input id="chekbox" type="checkbox" name="" />
                            <label htmlFor="chekbox" className="burger__label">
                                <span className="burger__line"></span>
                            </label>
                            <ul className="menu__ul burger__menu">
                                <li className="menu__li">
                                    <a href="#" className="menu__a">Home</a>
                                </li>
                                <li className="menu__li">
                                    <a href="#" className="menu__a">About me</a>
                                </li>
                                <li className="menu__li">
                                    <a href="#" className="menu__a">Skills</a>
                                </li>
                                <li className="menu__li">
                                    <a href="#" className="menu__a">Portfolio</a>
                                </li>
                                <li className="menu__li">
                                    <a href="#" className="menu__a">Contacts</a>
                                </li>
                            </ul>
                        </button>
                        <h1 className="head__autor">Denis Novik</h1>
                        <p className="head__city">UX | UI designer<br />24 years old, Minsk</p>
                    </div>
                    <picture>
                        <source srcSet="src/img/Denis.webp" media="(max-width: 391px)" />
                        <img  className="head__img" src={NovikPicture} alt="Денис Новик" />
                    </picture>
                    {/* <!-- <img class="head__img" src="./img/Denis.svg" alt="Denis Novik">   --> */}
                </div>
            </section>
        </>
    )
}