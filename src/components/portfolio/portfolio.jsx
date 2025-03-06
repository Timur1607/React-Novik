import './portfolio.css'
import PortfolioArticle from './portfolioArticle'

export default function portfolio(){
    return(
        <>
            <section className="portfolio" id='portfolio'>
                <div className="container">
                    <div className="portfolio__all">
                        <h2 className="portfolio__h2">Portfolio</h2>
                        <PortfolioArticle text='Online fashion store - Homepage' picture='src/img/homepage.webp' alt='homepage'/>
                        <PortfolioArticle text='Reebok Store - Concept' picture='src/img/reebok.webp' alt='reebok'/>
                        <PortfolioArticle text='Braun Landing Page - Concept' picture='src/img/camera.webp' alt='camera'/>
                    </div>
                </div>
            </section>
        </>
    )
}