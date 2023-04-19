import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight, FaHome } from "react-icons/fa"
import pageLinks from "../constants/links"
import Switch from "../components/Switch"
import { Link, Trans } from "gatsby-plugin-react-i18next"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="web dev" />
          </Link>
          <Switch />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return link.id === 1 ? (
              <div key={link.id} className="link-icon">
                <Link to={link.url}>
                  <FaHome size={18} />
                </Link>
              </div>
            ) : (
              <Link key={link.id} to={link.url}>
                <Trans i18nKey={link.text}>{link.text}</Trans>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
