import { CtaBottom, Hero, Menu } from "../../organisms"
import { Element } from 'react-scroll'
import Layout from "../Layout/Layout"

const LayoutHome = () => {
  return (
    <Layout>
      <Menu />

      <Element name='hero'>
        <Hero />
      </Element>

      <CtaBottom />
    </Layout>
  )
}

export default LayoutHome