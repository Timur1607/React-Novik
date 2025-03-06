export default function PortfolioArticle({text, picture, alt}){
    return(
        <>
            <a href="#" className="portfolio__articles">
                <img className="portfolio__homepage__img" src={picture} alt={alt}/>
                <p className="portfolio__homepage__text">{text}</p>
            </a>
        </>
    )
}