import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <div>
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui dolorem reiciendis numquam velit in, alias ab excepturi corporis est?"
        >
          <Link className="btn-white" to="/tours">
            Explore Tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  </div>
)
