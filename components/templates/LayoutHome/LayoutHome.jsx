import { Aliquot, CtaBottom, Footer, Hero, Menu, Progressivity, MapProposal, MapTaxHavens } from "@/components/organisms"
import { ModalGraphic, ModalBullet, ModalProposal } from "@/components/molecules"
import { Element } from 'react-scroll'
import Layout from "../Layout/Layout"

const LayoutHome = ({ modules }) => {
  console.log('m', modules)
  return (
    <Layout>
      <Menu />
      <Hero />

      {modules?.mapProgressivity && 
        <Element name='progressivity'>
          <Progressivity {...modules.mapProgressivity} />
        </Element>
      }

      {modules?.aliquots &&
        <Element name='aliquot'>
          <Aliquot {...modules.aliquots} />
        </Element>
      }

      {modules?.mapProposal &&
        <Element name='proposal-map'>
          <MapProposal {...modules.mapProposal} />
        </Element>
      }

      {modules?.mapTaxHavens &&
        <Element name='tax-havens'>
          <MapTaxHavens {...modules.mapTaxHavens} />
        </Element>
      }

      {modules?.ctaBottom &&
        <CtaBottom {...modules.ctaBottom} />
      }

      {modules?.footer &&
        <Footer {...modules.footer} />
      }

      <ModalGraphic />
      <ModalBullet />
      <ModalProposal />
    </Layout>
  )
}

export default LayoutHome