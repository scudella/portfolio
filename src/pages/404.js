import React from "react"
import Seo from "../components/Seo"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h2>
            <Trans i18nKey="not the page you are looking for?">
              not the page you are looking for?
            </Trans>
          </h2>
          <Link to="/" className="btn">
            <Trans i18nKey="back home">back home</Trans>
          </Link>
        </div>
      </main>
    </>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Not Found")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Error
