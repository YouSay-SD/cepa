import { ModalBullet } from "@/components/molecules"
import { CtaBottom, Footer, AliquotHero, Menu, AliquotArchive } from "@/components/organisms"
import Layout from "../Layout/Layout"

const LayoutAliquots = ({ modules }) => {
  return (
    <Layout>
      <Menu color='tertiary' />
      <AliquotHero />
      <AliquotArchive />

      {modules?.ctaBottom &&
        <CtaBottom {...modules.ctaBottom} />
      }

      {modules?.footer &&
        <Footer {...modules.footer} />
      }

      <ModalBullet />
    </Layout>
  )
}

export default LayoutAliquots