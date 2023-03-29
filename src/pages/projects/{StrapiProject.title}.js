import React from "react"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import { FaSearch, FaChevronLeft } from "react-icons/fa"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const {
    strapiProject: { description, printScreen, url },
  } = data
  return (
    <>
      <main className="project-template-page">
        <article className="card">
          <div className="link-container-slug">
            <div className="img-container">
              <GatsbyImage
                image={getImage(printScreen.localFile)}
                className="card-img"
                alt={title}
              />
            </div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="search-link-slug"
            >
              <FaSearch />
            </a>
          </div>

          <div className="link-container-slug">
            <div className="card-info">
              <h4>{title}</h4>
              <p>{description}</p>
              <button
                onClick={() => navigate(-1)}
                className="search-link-slug back-link"
              >
                <FaChevronLeft />
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
export const Head = ({ location, data }) => (
  <Seo
    title={data.strapiProject.title.toUpperCase()}
    description={data.strapiProject.description}
    image={data.strapiProject.printScreen.localFile.publicURL}
    location={location.pathname}
  />
)

export const query = graphql`
  query getSingleProject($title: String, $language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["projects"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    strapiProject(title: { eq: $title }) {
      description
      title
      url
      locale
      printScreen {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
