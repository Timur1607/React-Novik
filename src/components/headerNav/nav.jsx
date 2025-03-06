import './Nav.css'
export default function HeadTitle(){

    return (
        <>
            <div className="head__title">
                <a className="head__text head__text_active" href="#home">Home</a>
                <a className="head__text" href="#aboutme">About me</a>
                <a className="head__text" href="#skills">Skills</a>
                <a className="head__text" href="#portfolio">Portfolio</a>
                <a className="head__text" href="#contacts">Contacts</a>
            </div>
        </>
    )
}
