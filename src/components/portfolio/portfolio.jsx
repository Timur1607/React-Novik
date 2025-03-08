import './portfolio.css'
import PortfolioArticle from './portfolioArticle'
import Homepage from '../../img/homepage.webp'
import Reebok from '../../img/reebok.webp'
import Camera from '../../img/camera.webp'

export default function portfolio(){
    return(
        <>
            <section className="portfolio" id='portfolio'>
                <div className="container">
                    <div className="portfolio__all">
                        <h2 className="portfolio__h2">Portfolio</h2>
                        <PortfolioArticle text='Online fashion store - Homepage' picture={Homepage} alt='homepage'/>
                        <PortfolioArticle text='Reebok Store - Concept' picture={Reebok} alt='reebok'/>
                        <PortfolioArticle text='Braun Landing Page - Concept' picture={Camera} alt='camera'/>
                    </div>
                </div>
            </section>
        </>
    )
}