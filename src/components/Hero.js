import React from "react"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import { Link, Trans } from "gatsby-plugin-react-i18next"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>
            <Trans i18nKey="my-name">i'm eduardo</Trans>
          </h1>
          <h4>
            <Trans i18nKey="my-status">
              freelance web frontend and backend
            </Trans>
          </h4>
          <Link to="/contact/" className="btn">
            <Trans i18nKey="contact me">contact me</Trans>
          </Link>
          <div className="social-links">
            {socialLinks.map(link => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              )
            })}
          </div>
        </article>
        {/* controlling the height with StaticImage SVG can be done 
        changing the number of columns in grid-column (.hero-img)*/}
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* See https://undraw.co for cool SVG images */}
      </section>
    </header>
  )
}

export default Hero
