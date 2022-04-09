import { Aliquot, CtaBottom, Footer, Hero, Menu, Progressivity, MapProposal, MapTaxHavens } from "@/components/organisms"
import { ModalGraphic, ModalBullet, ModalProposal } from "@/components/molecules"
import { Element } from 'react-scroll'
import Layout from "../Layout/Layout"
import { useSelector } from "react-redux"

const LayoutHome = ({ modules }) => {
  const { filteredAliquots } = useSelector(state => state.aliquot)

  return (
    <Layout>
      <Menu {...modules.header} />

      {modules?.hero && 
        <Hero {...modules.hero} />
      }

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
        <Footer {...modules.footer} logo={modules.header.logo} />
      }
  
      {modules?.mapProgressivity && 
        <ModalGraphic countries={modules.mapProgressivity?.countries?.data} /> 
      }

      {filteredAliquots &&
        <ModalBullet items={filteredAliquots} />
      }
      <ModalProposal />
    </Layout>
  )
}

export default LayoutHome