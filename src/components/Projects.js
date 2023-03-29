import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link, Trans } from "gatsby-plugin-react-i18next"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects/" className="btn center-btn">
          <Trans i18nKey="projects">projects</Trans>
        </Link>
      )}
    </section>
  )
}

export default Projects
