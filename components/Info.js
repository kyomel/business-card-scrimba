import React from "react"

function Info() {
  return (
    <header>
      <img className="Info--profile" src="./assets/picture-main.jpg" />
      <h1 className="Info--name">Michael Stevan Lapandio</h1>
      <p className="Info--title">Software Engineer</p>
      <a href="https://kyomel.github.io/" className="website-link" target="_blank">My Website</a>
      <a className="email-btn" href="mailto:michaellapandio04@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i> Email</a>
      <a href="https://www.linkedin.com/in/michael-stevan-lapandio" className="linkedin-btn" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
    </header>
  )
}

export default Info