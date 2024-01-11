import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="py-5">
    <Link to="/" className="is-size-2 has-textdecoration-none has-text-primary">
      {siteTitle}
    </Link>
  </header>
)

export default Header
