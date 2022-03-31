import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setModules } from 'actions/modules';
import { setCountries } from 'actions/countries';
import { HeadSeo, LayoutHome } from 'components/templates'
import { countries, modules } from './api';

export default function Home() {
  const { data } = useQuery('countries', () => countries?.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(setModules(dataModules?.data))
  // }, [dispatch, dataModules])

  useEffect(() => {
    dispatch(setCountries(data?.data))
  }, [dispatch, data])

  return (
    <div>
      <HeadSeo title='CEPA | Home' />
      <LayoutHome modules={dataModules?.data?.attributes} />
    </div>
  )
}

// Static Props
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('countries', () => countries.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
