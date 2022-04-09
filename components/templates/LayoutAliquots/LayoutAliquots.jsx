import { ModalBullet } from "@/components/molecules"
import { CtaBottom, Footer, AliquotHero, Menu, AliquotArchive } from "@/components/organisms"
import { useSelector } from "react-redux"
import Layout from "../Layout/Layout"

const LayoutAliquots = ({ modules }) => {
  const { filteredAliquots } = useSelector(state => state.aliquot)

  return (
    <Layout>
      <Menu color='tertiary' {...modules.header} />
      <AliquotHero />
      <AliquotArchive />

      {modules?.ctaBottom &&
        <CtaBottom {...modules.ctaBottom} />
      }

      {modules?.footer &&
        <Footer {...modules.footer} logo={modules.header.logo} />
      }
      
      {filteredAliquots &&
        <ModalBullet items={filteredAliquots} />
      }
    </Layout>
  )
}

export default LayoutAliquots