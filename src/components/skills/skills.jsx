import './skills.css'
import SkillsArticle from './skillsArticle'
import Ps from '../../img/Ps.webp'
import Ai from '../../img/Ai.webp'
import Ae from '../../img/Ae (1).webp'
import figma from '../../img/figma.webp'

export default function skills(){
    

    return (
        <>
            <section className="skills" id='skills'>
                <div className="container">
                    <h2 className="skills__title">Skills</h2>
                    <p className="skills__description">I work in such programs as</p>
                    <div className="skills__programs">
                        <SkillsArticle name='Adobe Photoshop' picture={Ps} stars='4'/>
                        <SkillsArticle name='Adobe Illustrator' picture={Ai} stars='3'/>
                        <SkillsArticle name='Adobe After Effects' picture={Ae} stars='4'/>
                        <SkillsArticle name='Figma' picture={figma} stars='4'/>
                        
                    </div>
                </div>
            </section>
        </>
    )
}