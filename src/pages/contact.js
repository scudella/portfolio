import React from "react"
import Seo from "../components/Seo"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>
            <Trans i18nKey="title">get in touch</Trans>
          </h3>
          <form action="https://formspree.io/f/mjvlarvz" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("name")}
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder={t("email")}
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder={t("message")}
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              <Trans i18nKey="button">submit here</Trans>
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Contact")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["contact"] }, language: { eq: $language } }
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

export default Contact
