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

      {modules?.mapProgressivity.id ?
        <Element name='progressivity'>
          <Progressivity {...modules.mapProgressivity} />
        </Element>
      : null}

      {modules?.aliquots &&
        <Element name='aliquot'>
          <Aliquot {...modules.aliquots} />
        </Element>
      }

      {modules?.mapProposal.id ?
        <Element name='proposal-map'>
          <MapProposal {...modules.mapProposal} />
        </Element>
      : null}

      {modules?.mapTaxHavens.id ?
        <Element name='tax-havens'>
          <MapTaxHavens {...modules.mapTaxHavens} />
        </Element>
      : null}

      {modules?.ctaBottom.id ?
        <CtaBottom {...modules.ctaBottom} />
      : null}

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