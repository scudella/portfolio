import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import {
  Link,
  useI18next,
  useTranslation,
  Trans,
} from "gatsby-plugin-react-i18next"

const query = graphql`
  {
    allStrapiJob(sort: { idx: DESC }) {
      nodes {
        company
        cpyBtn
        position
        locale
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  let {
    allStrapiJob: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)

  const { i18n } = useI18next()
  const resolvedLanguage = i18n.resolvedLanguage

  jobs = jobs.filter(job => job.locale === resolvedLanguage)
  const { company, position, date, desc } = jobs[value]
  const { t } = useTranslation()

  return (
    <section className="section jobs">
      <Title title={t("experience")} />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {job.cpyBtn}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about/" className="btn center-btn">
        <Trans i18nKey="jobs-button">more info</Trans>
      </Link>
    </section>
  )
}

export default Jobs
