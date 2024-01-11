import React, { useState, useContext } from "react"
import PageContext from "../context/PageContext"

const MovieSelection = ({ handler }) => {
  const [regFilter, setRegFilter] = useState("")
  const [filterValue, setFilterValue] = useState("regie")
  const ctx = useContext(PageContext)

  const handleRegFilterChange = evt => {
    setRegFilter(evt.target.value)
  }

  const resetRegFilter = () => {
    setRegFilter("")
    handler("", "")
  }

  const setFilterVal = evt => {
    setFilterValue(evt.target.value)
  }

  const fSubmit = e => {
    e.preventDefault()
    handler(filterValue, e.target[1].value)
    ctx.resetPage()
  }

  return (
    <div className="column is-one-third mr-6">
      <form onSubmit={fSubmit}>
        <div>
          <label htmlFor="Filter">Filter</label>
          <select name="FilterValue" onChange={setFilterVal}>
            <option value="regie">Regie</option>
            <option value="titel">Titel</option>
            <option value="darsteller">Darsteller</option>
            <option value="genre">Genre</option>
          </select>
          <input
            className="ml-4"
            type="text"
            name="regFilter"
            value={regFilter}
            onChange={handleRegFilterChange}
          />
        </div>
        <button
          className="button is-primary is-small mt-4"
          type="submit"
          disabled={regFilter.length === 0}
        >
          Filter anwenden
        </button>

        <button
          className="button is-info is-small ml-4 mt-4"
          onClick={resetRegFilter}
          disabled={regFilter === ""}
        >
          Filter löschen
        </button>
      </form>
    </div>
  )
}

export default MovieSelection
