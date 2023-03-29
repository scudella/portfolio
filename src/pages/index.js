import React from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiService: { nodes: services },
  } = data

  const { t } = useTranslation()

  return (
    <>
      <main>
        <Hero />
        <Services services={services} />
        <Jobs />
        <Projects title={t("featured projects")} showLink projects={projects} />
      </main>
    </>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Eduardo Scudeller Libardi WebDev Portfolio")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    allStrapiProject(
      filter: { featured: { eq: true }, locale: { eq: $language } }
    ) {
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
    allStrapiService(filter: { locale: { eq: $language } }) {
      nodes {
        index
        locale
        title
        text
      }
    }
  }
`

export default IndexPage
