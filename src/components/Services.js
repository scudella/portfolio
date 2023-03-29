import React from "react"
import Title from "./Title"
import icons from "../constants/services"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Services = ({ services }) => {
  const { t } = useTranslation()
  return (
    <section className="section bg-grey">
      <Title title={t("services")} />
      <div className="section-center services-center">
        {services.map(service => {
          const { index, title, text } = service
          return (
            <article key={index} className="service">
              {icons[index - 1].icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
