import './footer.css'
import Button from '../button'
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
                            <img className="" src="src/img/LinkedIn.svg" alt="LinkedIn"/>
                            <img className="" src="src/img/instagram.svg" alt="Instagram"/>
                            <img className="" src="src/img/behance.svg" alt="Behance"/>
                            <img className="" src="src/img/Dribble.svg" alt="Dribble"/>
                        </div>
                        <p className="footer__text__last">Like me on<br/> LinkedIn, Instagram, Behance, Dribble</p>
                    </div>
                </div>
            </section>
        </>
    )
}