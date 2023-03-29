import React from "react"
import socialLinks from "../constants/social_links"
import { Trans } from "gatsby-plugin-react-i18next"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
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
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span> Eduardo Scudeller Libardi </span>
          <Trans i18nKey="footerReserved">all rights reserved</Trans>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
