import { useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setAliquotCategories, setAliquots } from '../actions/countries'
import { HeadSeo, LayoutAliquots } from '../components/templates'
import { aliquotCategories, aliquots, modules } from './api'

export default function Aliquots() {
  const { data: { data } } = useQuery('aliquots', () => aliquots.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAliquots(data))
    dispatch(setAliquotCategories(dataAliquotCategories?.data))
  }, [dispatch, data, dataAliquotCategories])

  return (
    <div>
      <HeadSeo title='CEPA | Alicuotas' />
      <LayoutAliquots modules={dataModules?.data?.attributes} />
    </div>
  )
}

// Static Props
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('aliquots', () => aliquots.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());
  await queryClient.prefetchQuery('aliquotCategories', () => aliquotCategories?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
