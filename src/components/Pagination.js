import React, { useContext } from "react"
import PageContext from "../context/PageContext"

const Pagination = ({ filmCount }) => {
  const ctx = useContext(PageContext)
  const fcount = filmCount
  const numOfPages = Math.ceil(fcount / 3)
  const isFirstPage = ctx.page === 1
  const isLastPage = ctx.page === numOfPages

  return (
    <div className="column is-two-thirds ml-6">
      <nav
        className="pagination is-small ml-4 mr-4 has-background-primary"
        style={{ width: 600 }}
      >
        {isFirstPage && (
          <button
            className="button disabled is-warning is-medium"
            // to={`#`}
            // rel=""
          >
            Anfang
          </button>
        )}
        {!isFirstPage && (
          <button className="button is-info is-medium " onClick={ctx.onBack}>
            zurück
          </button>
        )}
        <p className="is-size-5">
          Seite: {ctx.page} von {numOfPages}
        </p>
        {!isLastPage && (
          <button className="button is-info is-medium " onClick={ctx.onForward}>
            vor
          </button>
        )}
        {isLastPage && (
          <button className="button disabled is-warning is-medium ">
            Ende
          </button>
        )}
      </nav>
    </div>
  )
}
export default Pagination
