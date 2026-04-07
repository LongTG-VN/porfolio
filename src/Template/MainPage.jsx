import React from 'react'
import HeroComponent from '../Component/MainPage/HeroComponent'
import AboutComponent from '../Component/MainPage/AboutComponent'
import SkillsComponent from '../Component/MainPage/SkillsComponent'
import ProjectComponent from '../Component/MainPage/ProjectComponent'
import ContactComponent from '../Component/MainPage/ContactComponent'

const MainPage = () => {
  return (
    <>
      {/* Thường Hero sẽ là id="home" hoặc không cần id nếu là đầu trang */}
      <div id="hero">
        <HeroComponent />
      </div>

      <section id="about">
        <AboutComponent />
      </section>

      <section id="skills">
        <SkillsComponent />
      </section>

      <section id="projects">
        <ProjectComponent/>
      </section>

      <section id="contact">
        <ContactComponent/>
      </section>
    </>
  )
}

export default MainPage