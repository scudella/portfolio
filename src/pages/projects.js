import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  const { t } = useTranslation()

  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title={t("all projects")} projects={projects} />
        </section>
      </main>
    </>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Projects")} />
}

export const query = graphql`
  query ($language: String!) {
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

    allStrapiProject(filter: { locale: { eq: $language } }) {
      nodes {
        description
        featured
        github
        locale
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
