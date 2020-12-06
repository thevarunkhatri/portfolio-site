import React from "react"

import Layout from "../layouts/layout"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Main from "../components/main"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout title="Home" footer="active">
    <Nav scrollPoint="#hero"/>
    <Hero/>
    <Main>
    </Main>
    <Footer/>
  </Layout>
)

export default IndexPage
