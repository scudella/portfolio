import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const {
    strapiProject: { description, printScreen },
  } = data
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.publicURL}
      />
      <main className="project-template-page">
        <article className="card">
          <div className="img-container">
            <GatsbyImage
              image={getImage(printScreen.localFile)}
              className="card-img"
              alt={title}
            />
          </div>
          <div className="card-info">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </article>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
      printScreen {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
