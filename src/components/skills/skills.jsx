import './skills.css'
import SkillsArticle from './skillsArticle'

export default function skills(){

    return (
        <>
            <section className="skills" id='skills'>
                <div className="container">
                    <h2 className="skills__title">Skills</h2>
                    <p className="skills__description">I work in such programs as</p>
                    <div className="skills__programs">
                        <SkillsArticle name='Adobe Photoshop' picture='src/img/Ps.webp' stars='4'/>
                        <SkillsArticle name='Adobe Illustrator' picture='src/img/Ai.webp' stars='3'/>
                        <SkillsArticle name='Adobe After Effects' picture='src/img/Ae (1).webp' stars='4'/>
                        <SkillsArticle name='Figma' picture='src/img/figma.webp' stars='4'/>
                        
                    </div>
                </div>
            </section>
        </>
    )
}