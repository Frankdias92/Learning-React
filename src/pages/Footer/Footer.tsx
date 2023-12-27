import { GithubLogo, LinkedinLogo, MediumLogo } from "@phosphor-icons/react"
import "./Footer.css"


export function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <h1>Info</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/franklinmacedodias/" target="_blank">
              <LinkedinLogo />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Frankdias92" target="_blank">
              <GithubLogo />
              Git Hub
            </a>
          </li>
          <li>
            <a href="https://medium.com/@frankmcdias" target="_blank">
              <MediumLogo />
              Medium
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h1>About</h1>
        <p>Project used for the purpose of studying the use of React Hooks.</p>
      </div>
    </footer>
  )
}