import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setCountries, setAliquots, setAliquotCategories } from 'actions/countries';
import { HeadSeo, LayoutHome } from 'components/templates'
import { aliquotCategories, aliquots, countries, mapProgressivityResp, mapProposalResp, mapTaxHavensResp, modules } from './api';

export default function Home() {
  const { data } = useQuery('countries', () => countries?.getAll())
  const { data: dataAliquots } = useQuery('aliquots', () => aliquots?.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataMapProposal } = useQuery('mapProposalResp', () => mapProposalResp?.getAll())
  const { data: dataMapProgressivity } = useQuery('mapProgressivityResp', () => mapProgressivityResp?.getAll())
  const { data: dataMapTaxHavens } = useQuery('mapTaxHavensResp', () => mapTaxHavensResp?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
  const dataMapProposalCountries = dataMapProposal?.data?.attributes.mapProposal?.countries;
  const dataMapProgressivityCountries = dataMapProgressivity?.data?.attributes.mapProgressivity?.countries;
  const dataMapTaxHavensCountries = dataMapTaxHavens?.data?.attributes.mapTaxHavens?.countries;
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setCountries(data?.data))
    dispatch(setAliquots(dataAliquots?.data))
    dispatch(setAliquotCategories(dataAliquotCategories?.data))
  }, [dispatch, data, dataAliquots, dataAliquotCategories])

  const allData = {
    ...dataModules?.data?.attributes,
    mapProposal: {
      ...dataModules?.data?.attributes.mapProposal,
      countries: { ...dataMapProposalCountries }
    },
    mapProgressivity: {
      ...dataModules?.data?.attributes.mapProgressivity,
      countries: { ...dataMapProgressivityCountries }
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
  await queryClient.prefetchQuery('countries', () => countries.getAll());
  await queryClient.prefetchQuery('aliquots', () => aliquots.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());
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
