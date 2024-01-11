import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MovieList from "../components/MovieList"
// import PageContext from "../context/PageContext"

const movies = ({ data }) => {
  // console.log("Data: ", data)
  let movies = data.allLeanFilmeJson.nodes

  return (
    <Layout>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title is-centered">
            Filme aus unserer Sammlung
          </p>
        </div>
        <div className="card-content is-align-items-centered">
          <MovieList filme={movies}></MovieList>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Film Übersicht" />
export default movies

export const query = graphql`
  query AllFilms {
    allLeanFilmeJson(sort: { titel: ASC }) {
      nodes {
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
  }
`
