import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Switch = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiFlag: { nodes: flags },
  } = data
  const { languages, originalPath, i18n } = useI18next()
  return (
    <ul className="languages">
      {languages.map(lng => {
        const flag = flags.find(flag => flag.locale === lng)
        return (
          <li key={lng}>
            <Link
              to={originalPath}
              language={lng}
              style={{ opacity: i18n.resolvedLanguage === lng ? "0.2" : "1" }}
            >
              <img src={flag.CountryFlag.localFile.publicURL} alt="flag" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const query = graphql`
  {
    allStrapiFlag {
      nodes {
        description
        locale
        CountryFlag {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default Switch
