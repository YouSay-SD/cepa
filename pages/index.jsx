import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setCountries } from 'actions/countries';
import { HeadSeo, LayoutHome } from 'components/templates'
import { aliquotCategories, aliquots, countries, header, footer, heroResp, mapProgressivityResp, mapProposalResp, mapTaxHavensResp, modules, ctaBottomResp, aliquotCategoriesType } from './api';
import { setAliquotCategories, setAliquotCategoriesType, setAliquots, setCategory, setCategoryType } from 'actions/aliquots';

export default function Home() {
  const { data: dataHeader } = useQuery('header', () => header?.getAll())
  const { data: dataFooter } = useQuery('footer', () => footer?.getAll())
  const { data: dataCountries } = useQuery('countries', () => countries?.getAll())
  const { data: dataAliquots } = useQuery('aliquots', () => aliquots?.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataHero } = useQuery('heroResp', () => heroResp?.getAll())
  const { data: dataCtaBottom } = useQuery('ctaBottomResp', () => ctaBottomResp?.getAll())
  const { data: dataMapProposal } = useQuery('mapProposalResp', () => mapProposalResp?.getAll())
  const { data: dataMapProgressivity } = useQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll())
  const { data: dataMapTaxHavens } = useQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
  const { data: dataAliquotCategoriesType } = useQuery('aliquotCategoriesType', () => aliquotCategoriesType?.getAll());
  const dataHeroWithImage = dataHero?.data?.attributes.hero;
  const dataMapProposalCountries = dataMapProposal?.data?.attributes.mapProposal?.countries;
  const dataMapProgressivityCountries = dataMapProgressivity?.data?.attributes.mapProgressivity?.countries;
  const dataMapTaxHavensCountries = dataMapTaxHavens?.data?.attributes.mapTaxHavens?.countries;
  const dataMapProgressivityCountriesWithGraphics = dataMapProgressivityCountries?.data.map(({ id: idCountry }) => dataCountries.data.find(({ id }) => idCountry === id ));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountries(dataCountries?.data))
  }, [dispatch, dataCountries])
  
  useEffect(() => {
    dispatch(setAliquots(dataAliquots?.data))
  }, [dispatch, dataAliquots])
  
  useEffect(() => {
    dispatch(setAliquotCategories(dataAliquotCategories?.data))
  }, [dispatch, dataAliquotCategories])

  useEffect(() => {
    dispatch(setAliquotCategoriesType(dataAliquotCategoriesType?.data))
  }, [dispatch, dataAliquotCategoriesType])

  // Set Category Type by default
  useEffect(() => {
    dispatch(setCategoryType(dataAliquotCategoriesType?.data[0]?.id))
  }, [dispatch, dataAliquotCategoriesType])

  // Set Category Country by default
  useEffect(() => {
    dispatch(setCategory(dataAliquotCategories.data[0]?.id))
  }, [dispatch, dataAliquotCategories])

  const allData = {
    header: dataHeader?.data?.attributes,
    footer: dataFooter?.data?.attributes,
    ...dataModules?.data?.attributes,
    hero: {
      ...dataHeroWithImage
    },
    mapProposal: {
      ...dataModules?.data?.attributes.mapProposal,
      countries: { ...dataMapProposalCountries }
    },
    mapProgressivity: {
      ...dataModules?.data?.attributes.mapProgressivity,
      // countries: { ...dataMapProgressivityCountries }
      countries: dataMapProgressivityCountriesWithGraphics ? {
        data: [
          ...dataMapProgressivityCountriesWithGraphics
        ]
      } : null
    },
    mapTaxHavens: {
      ...dataModules?.data?.attributes.mapTaxHavens,
      countries: { ...dataMapTaxHavensCountries }
    },
    ctaBottom: {
      ...dataCtaBottom?.data.attributes.ctaBottom
    },
  }

  return (
    <div>
      <HeadSeo title='CEPA | Home' />
      <LayoutHome modules={allData} />
    </div>
  )
}

// Static Props
export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('header', () => header.getAll());
  await queryClient.prefetchQuery('footer', () => footer.getAll());
  await queryClient.prefetchQuery('countries', () => countries.getAll());
  await queryClient.prefetchQuery('aliquots', () => aliquots.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());
  await queryClient.prefetchQuery('heroResp', () => heroResp?.getAll());
  await queryClient.prefetchQuery('ctaBottomResp', () => ctaBottomResp?.getAll());
  await queryClient.prefetchQuery('mapProposalResp', () => mapProposalResp?.getAll());
  await queryClient.prefetchQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll());
  await queryClient.prefetchQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll());
  await queryClient.prefetchQuery('aliquotCategories', () => aliquotCategories?.getAll());
  await queryClient.prefetchQuery('aliquotCategoriesType', () => aliquotCategoriesType?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
