import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import Button from "../examples/button"

const Tours = () => {
  return (
    <Layout>
      <div>
        <h1>Tours Page</h1>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
        <Button big color="red">
          My Button
        </Button>
        <Button color="green">Your Button</Button>
      </div>
    </Layout>
  )
}

export default Tours
