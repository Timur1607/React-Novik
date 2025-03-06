import HeadTitle from './components/headerNav/nav.jsx'
import Header from './components/header/Header.jsx'
import AboutMe from './components/aboutMe/aboutMe.jsx'
import Skills from './components/skills/skills.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Footer from './components/footer/footer.jsx'

export default function(){
  return(
    <>
      <h1>Hello React</h1>
      <HeadTitle/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}