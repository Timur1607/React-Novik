export default function skillsArticle({name, picture, stars}){
    return(
        <>
            <article className="skills__program program">
                <img className="program__picture" src={picture} alt={name}/>
                <p className="program__name">{name}</p>
                <div className="program__stars">
                    <img className="star_black" src={(stars >= '1' ? "src/img/Star_black.svg" : "src/img/Star_grey.svg")} alt="star_black"/>
                    <img className="star_black" src={(stars >= '2' ? "src/img/Star_black.svg" : "src/img/Star_grey.svg")} alt="star_black"/>
                    <img className="star_black" src={(stars >= '3' ? "src/img/Star_black.svg" : "src/img/Star_grey.svg")} alt="star_black"/>
                    <img className="star_black" src={(stars >= '4' ? "src/img/Star_black.svg" : "src/img/Star_grey.svg")} alt="star_black"/>
                    <img className="star_gray" src={(stars >= '5' ? "src/img/Star_black.svg" : "src/img/Star_grey.svg")} alt="star_gray"/>
                </div>
            </article>
        </>
    )
}