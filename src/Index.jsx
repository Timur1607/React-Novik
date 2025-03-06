import {createRoot} from 'react-dom/client'
import Header from './components/header/Header.jsx'
import AboutMe from './components/aboutMe/aboutMe.jsx'
import Skills from './components/skills/skills.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Footer from './components/footer/footer.jsx'
const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Footer/>
    </>
)