import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        featured
        github
        slug
        id
        title
        url
        stack {
          title
          id
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
export default ProjectsPage
