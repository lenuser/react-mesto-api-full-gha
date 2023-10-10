import React from "react"

function Footer() {
  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()}. Елена Осипова
      </p>
    </footer>
  )
}

export default Footer
