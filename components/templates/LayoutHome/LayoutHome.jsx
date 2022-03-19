import { CtaBottom, Footer, Hero, Menu, Progressivity, ProposalMap, TaxHavens } from "../../organisms"
import { Element } from 'react-scroll'
import Layout from "../Layout/Layout"
import Aliquot from "../../organisms/Aliquot/Aliquot"

const LayoutHome = () => {
  return (
    <Layout>
      <Menu />
      <Hero />

      <Element name='progressivity'>
        <Progressivity />
      </Element>

      <Element name='aliquot'>
        <Aliquot />
      </Element>

      <Element name='proposal-map'>
        <ProposalMap />
      </Element>

      <Element name='tax-havens'>
        <TaxHavens />
      </Element>

      <CtaBottom />
      <Footer />
    </Layout>
  )
}

export default LayoutHome