import React, { useEffect, useState, useContext } from "react"
import Pagination from "./Pagination"
import MovieListPage from "./MovieListPage"
import MovieSelection from "./MovieSelection"
import PageContext, { PageContextProvider } from "../context/PageContext"

const isBrowser = typeof window !== "undefined"

const MovieList = ({ filme }) => {
  const ctx = useContext(PageContext)
  // console.log("Storage: ", parseInt(sessionStorage.getItem("currentPage")))
  const [filter, setFilter] = useState("")
  const [movies, setMovies] = useState(filme)

  const containsVal = (arr, v) => {
    let myArr = [...arr]
    let treffer = false
    console.log("Array: ", myArr)
    myArr.forEach(obj => {
      let myString = ""
      myString = obj.name ? obj.name : obj.genre
      // console.log("Name: ", myString, v)
      if (myString.indexOf(v) !== -1) {
        // console.log("TREFFER!!!")
        treffer = true
      }
    })
    return treffer
  }
  var currPage = 1
  if (isBrowser) {
    currPage = window.sessionStorage.getItem("currentPage")
  }
  const handleFilter = (fVal, str) => {
    if (filter.trim !== "") {
      setFilter(str)
      switch (fVal) {
        case "regie":
          console.log("Werte: ", fVal, str)
          setMovies(filme.filter(f => f.regie.indexOf(str) !== -1))
          break
        case "titel":
          console.log("Werte: ", fVal, str)
          setMovies(filme.filter(f => f.titel.indexOf(str) !== -1))
          break
        case "darsteller":
          console.log("Werte: ", fVal, str)
          setMovies(filme.filter(f => containsVal(f.actors.data, str)))
          break
        case "genre":
          console.log("Werte: ", fVal, str)
          setMovies(filme.filter(f => containsVal(f.genres.data, str)))
          break
        default:
          setMovies(filme)
      }
    }
  }
  useEffect(() => {
    if (filter === "") {
      setMovies(filme)
    }
  }, [filter, filme])

  return (
    <PageContextProvider
      value={{
        page: currPage,
        onBack: ctx.onBack,
        onForward: ctx.onForward,
        resetPage: ctx.resetPage,
      }}
    >
      <div className="container">
        <div className="columns">
          <MovieSelection handler={handleFilter}></MovieSelection>
          <Pagination filmCount={movies.length}></Pagination>
        </div>
        <MovieListPage filme={movies}></MovieListPage>
      </div>
    </PageContextProvider>
  )
}

export default MovieList
