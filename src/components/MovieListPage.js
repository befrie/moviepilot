import React, { useContext } from "react"
import { Link } from "gatsby"
import PageContext from "../context/PageContext"
import * as styles from "../styles/MovieListPage.module.css"

export default function MovieListPage({ filme }) {
  const ctx = useContext(PageContext)
  console.log("Page: ", ctx.page)
  const start = (ctx.page - 1) * 3
  const movies = filme.slice(start, start + 3)

  return movies.map(film => {
    const myActors = [...film.actors.data]
    return (
      <div className="box container" key={film.slug}>
        <ul>
          <li>
            <article className={styles.article}>
              <img
                src={require(`../images/${film.bild}`).default}
                alt={film.bild}
                layout="fixed"
                width={140}
                height={180}
              />
              <div>
                <h6 className="notification is-info is-size-4">
                  <Link to={`/movie/${film.slug}`}>{film.titel}</Link>
                </h6>
                <h6 className="is-size-4">Regie: {film.regie}</h6>
                <h6 className="is-size-5">
                  {film.land} {film.erscheinungsjahr}
                </h6>
                <h6 className="mt-2 is-size-5">Darsteller:</h6>
                <div className="columns mt-1 is-multiline">
                  {myActors.map(actor => {
                    return (
                      <div className="column is-one-third" key={actor.name}>
                        <ul>
                          <li>{actor.name}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    )
  })
}
