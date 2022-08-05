import { useState, useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setCountries, setCountryCategoriesTaxHavens, setCategoryTaxHaven } from 'actions/countries';
import { HeadSeo, LayoutHome } from 'components/templates'
import { aliquotCategories, aliquots, countries, header, footer, heroResp, mapProgressivityResp, mapProposalResp, mapTaxHavensResp, modules, ctaBottomResp, aliquotCategoriesType, aliquotCategoriesTaxHavens, countryCategoriesTaxHavens, triviaResp } from './api';
import { setAliquotCategories, setAliquotCategoriesType, setAliquots, setCategory, setCategoryType } from 'actions/aliquots';
import { STRAPI_API } from 'constants';

export default function Home() {
  const [dataTrivia, setDataTrivia] = useState(null)
  const { data: dataHeader } = useQuery('header', () => header?.getAll())
  const { data: dataFooter } = useQuery('footer', () => footer?.getAll())
  const { data: dataCountries } = useQuery('countries', () => countries?.getAll())
  const { data: dataAliquots } = useQuery('aliquots', () => aliquots?.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataHero } = useQuery('heroResp', () => heroResp?.getAll())
  // const { data: dataTrivia } = useQuery('triviaResp', () => triviaResp?.getAll())
  const { data: dataCtaBottom } = useQuery('ctaBottomResp', () => ctaBottomResp?.getAll())
  const { data: dataMapProposal } = useQuery('mapProposalResp', () => mapProposalResp?.getAll())
  const { data: dataMapProgressivity } = useQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll())
  const { data: dataMapTaxHavens } = useQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
  const { data: dataAliquotCategoriesType } = useQuery('aliquotCategoriesType', () => aliquotCategoriesType?.getAll());
  const { data: dataCountryCategoriesTaxHavens } = useQuery('countryCategoriesTaxHavens', () => countryCategoriesTaxHavens?.getAll());
  const dataHeroWithImage = dataHero?.data?.attributes.hero;
  const dataMapProposalCountries = dataMapProposal?.data?.attributes.mapProposal?.countries;
  const dataMapProgressivityCountries = dataMapProgressivity?.data?.attributes.mapProgressivity?.countries;
  const dataMapTaxHavensCountries = dataMapTaxHavens?.data?.attributes.mapTaxHavens?.countries;
  const dataMapProgressivityCountriesWithGraphics = dataMapProgressivityCountries?.data.map(({ id: idCountry }) => dataCountries.data.find(({ id }) => idCountry === id ));
  const filteredCountries = dataCountries?.data.filter(({ id }) => dataMapTaxHavensCountries?.data.some(item => item.id === id) )
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${STRAPI_API}/module?populate[Trivia][populate][TriviaItem][populate]=*`)
    .then(response => response.json())
    .then(data => setDataTrivia(data.data.attributes.Trivia));
  }, [])

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

  useEffect(() => {
    dispatch(setCountryCategoriesTaxHavens(dataCountryCategoriesTaxHavens?.data))
  }, [dispatch, dataCountryCategoriesTaxHavens])

  // Set Category Tax Havens by default
  useEffect(() => {
    dispatch(setCategoryTaxHaven(dataCountryCategoriesTaxHavens?.data[0]?.id))
  }, [dispatch, dataCountryCategoriesTaxHavens])

  // Set Category Type by default
  useEffect(() => {
    dispatch(setCategoryType(dataAliquotCategoriesType?.data[0]?.id))
  }, [dispatch, dataAliquotCategoriesType])

  // Set Category Country by default
  useEffect(() => {
    dispatch(setCategory(null))
  }, [dispatch])

  const allData = {
    trivia: dataTrivia,
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
      ...dataMapProgressivity?.data.attributes.mapProgressivity,
      countries: dataMapProgressivityCountriesWithGraphics ? {
        data: [
          ...dataMapProgressivityCountriesWithGraphics
        ]
      } : null,
    },
    mapTaxHavens: {
      ...dataModules?.data?.attributes.mapTaxHavens,
      countries: [...filteredCountries]
    },
    ctaBottom: {
      ...dataCtaBottom?.data.attributes.ctaBottom
    },
  }

  return (
    <>
      <HeadSeo 
        title='CEPA | Home' 
        description={dataHero?.data?.attributes?.hero.description}
        favicon={dataHeader?.data?.attributes.favicon}
      />
      <LayoutHome modules={allData} />
    </>
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
  // await queryClient.prefetchQuery('triviaResp', () => triviaResp?.getAll());
  await queryClient.prefetchQuery('ctaBottomResp', () => ctaBottomResp?.getAll());
  await queryClient.prefetchQuery('mapProposalResp', () => mapProposalResp?.getAll());
  await queryClient.prefetchQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll());
  await queryClient.prefetchQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll());
  await queryClient.prefetchQuery('aliquotCategories', () => aliquotCategories?.getAll());
  await queryClient.prefetchQuery('aliquotCategoriesType', () => aliquotCategoriesType?.getAll());
  await queryClient.prefetchQuery('countryCategoriesTaxHavens', () => countryCategoriesTaxHavens?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
