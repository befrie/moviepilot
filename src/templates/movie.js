import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import * as styles from "../styles/MovieListPage.module.css"

export default function movie({ data }) {
  const {
    slug,
    titel,
    regie,
    beschreibung,
    land,
    bild,
    actors,
    genres,
    erscheinungsjahr,
  } = data.leanFilmeJson

  return (
    <Layout>
      <article className={styles.article_small}>
        <h6 className="notification is-info is-size-4 ">
          {titel}
          <Link
            to={`/movies`}
            className="notification is-info is-size-4"
            style={{ marginLeft: "25em" }}
          >
            Zurück zur Liste
          </Link>
        </h6>
        <p className="is-size-5">{beschreibung}</p>
        <article className={styles.article}>
          <img
            src={require(`../images/${bild}`).default}
            width={250}
            alt={titel}
          />
          <div>
            <ul>
              <li className="is-size-4">
                {land} ({erscheinungsjahr})
              </li>
              <li className="is-size-4">Regie: {regie}</li>
            </ul>
          </div>
        </article>
        <h6
          className="notification is-primary is-size-4"
          style={{ marginTop: "1em" }}
        >
          Darsteller
        </h6>
        <ul className={styles.actor_small}>
          {actors.data.map(act => {
            return (
              <li key={act.name} className="is-size-4">
                {act.name}
              </li>
            )
          })}
        </ul>
        <ul className={styles.actor_small}>
          {genres.data.map(gen => {
            return (
              <li key={gen.genre} className="is-size-4">
                {gen.genre}
              </li>
            )
          })}
        </ul>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    leanFilmeJson(slug: { eq: $slug }) {
      aufbewahrungsort
      beschreibung
      bild
      erscheinungsjahr
      id
      regie
      medium
      land
      slug
      titel
      genres {
        data {
          genre
        }
      }
      actors {
        data {
          name
        }
      }
    }
  }
`
