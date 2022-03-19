import { CtaBottom, Footer, AliquotHero, Menu, AliquotArchive } from "../../organisms"
import Layout from "../Layout/Layout"

const LayoutAliquots = () => {
  return (
    <Layout>
      <Menu color='tertiary' />
      <AliquotHero />
      <AliquotArchive />
      <CtaBottom />
      <Footer />
    </Layout>
  )
}

export default LayoutAliquots