import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built in Tehran,
      With lots of <a rel="me" href="https://mastodon.social/@mehr">♡</a> and hope.
    </footer>
  )
}

export default Footer
