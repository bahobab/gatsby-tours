import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/Layout"

// import Header from "../examples/RegularHeader"
import StyledHero from "../components/StyledHero"

export default class Tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// export default Tours
