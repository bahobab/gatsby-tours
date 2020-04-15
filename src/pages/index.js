import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/Layout"
// import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"

export default ({ data }) => (
  <div>
    <Layout>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui dolorem reiciendis numquam velit in, alias ab excepturi corporis est?"
        >
          <Link className="btn-white" to="/tours">
            Explore Tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  </div>
)

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
