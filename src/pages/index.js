import * as React from "react"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "bulma/css/bulma.min.css"
import MovieListPage from "../components/MovieListPage"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    {/* <Pagination></Pagination> 
    <MovieListPage></MovieListPage>*/}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
