import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setCountries } from 'actions/countries';
import { HeadSeo, LayoutHome } from 'components/templates'
import { aliquotCategories, aliquots, countries, header, heroResp, mapProgressivityResp, mapProposalResp, mapTaxHavensResp, modules } from './api';
import { setAliquotCategories, setAliquots, setCategory } from 'actions/aliquots';

export default function Home() {
  const { data: dataHeader } = useQuery('header', () => header?.getAll())
  const { data: dataCountries } = useQuery('countries', () => countries?.getAll())
  const { data: dataAliquots } = useQuery('aliquots', () => aliquots?.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataHero } = useQuery('heroResp', () => heroResp?.getAll())
  const { data: dataMapProposal } = useQuery('mapProposalResp', () => mapProposalResp?.getAll())
  const { data: dataMapProgressivity } = useQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll())
  const { data: dataMapTaxHavens } = useQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
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
    dispatch(setCategory(dataAliquotCategories.data[0]?.id))
  }, [dispatch, dataAliquotCategories])

  const allData = {
    header: dataHeader?.data?.attributes,
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
      countries: {
        data: [
          ...dataMapProgressivityCountriesWithGraphics
        ]
      }
    },
    mapTaxHavens: {
      ...dataModules?.data?.attributes.mapTaxHavens,
      countries: { ...dataMapTaxHavensCountries }
    }
  }

  return (
    <div>
      <HeadSeo title='CEPA | Home' />
      <LayoutHome modules={allData} />
    </div>
  )
}

// Static Props
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('header', () => header.getAll());
  await queryClient.prefetchQuery('countries', () => countries.getAll());
  await queryClient.prefetchQuery('aliquots', () => aliquots.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());
  await queryClient.prefetchQuery('heroResp', () => heroResp?.getAll());
  await queryClient.prefetchQuery('mapProposalResp', () => mapProposalResp?.getAll());
  await queryClient.prefetchQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll());
  await queryClient.prefetchQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll());
  await queryClient.prefetchQuery('aliquotCategories', () => aliquotCategories?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
