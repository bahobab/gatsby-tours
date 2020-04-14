import React from "react"
import { Link } from "gatsby"

import Banner from "../components/Banner"
import { Layout } from "../components/Layout"
import styles from "../css/error.module.css"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner
          title="Page not found"
          info="Ooops! You've place yourself in a cul-de-sac."
        >
          <Link to="/" className="btn-white">
            Return to home page...
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
