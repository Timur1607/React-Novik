import './footer.css'
import Button from '../button'
import LinkedIn from '../../img/LinkedIn.svg'
import Instagram from '../../img/instagram.svg'
import Behance from '../../img/behance.svg'
import Dribble from '../../img/Dribble.svg'
export default function Footer(){
    return(
        <>
            <section className="footer" id='contacts'>
                <div className="container">
                    <div className="footer__all">
                        <h2 className="footer__h2">Contacts</h2>
                        <p className="footer__text">Want to know more or just chat? <br/>You are welcome!</p>
                        <Button text='Send message'/>
                        <div className="footer__img">
                            <img className="" src={LinkedIn} alt="LinkedIn"/>
                            <img className="" src={Instagram} alt="Instagram"/>
                            <img className="" src={Behance} alt="Behance"/>
                            <img className="" src={Dribble} alt="Dribble"/>
                        </div>
                        <p className="footer__text__last">Like me on<br/> LinkedIn, Instagram, Behance, Dribble</p>
                    </div>
                </div>
            </section>
        </>
    )
}