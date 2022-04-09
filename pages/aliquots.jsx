import { useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setAliquotCategories, setAliquots, setCategory } from '../actions/aliquots'
import { HeadSeo, LayoutAliquots } from '../components/templates'
import { aliquotCategories, aliquots, modules, header } from './api'

export default function Aliquots() {
  const { data: dataHeader } = useQuery('header', () => header?.getAll())
  const { data: { data } } = useQuery('aliquots', () => aliquots.getAll())
  const { data: dataModules } = useQuery('modules', () => modules?.getAll())
  const { data: dataAliquotCategories } = useQuery('aliquotCategories', () => aliquotCategories?.getAll());
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAliquots(data))
  }, [dispatch, data])
  
  useEffect(() => {
    dispatch(setAliquotCategories(dataAliquotCategories?.data))
  }, [dispatch, dataAliquotCategories?.data])

  useEffect(() => {
    dispatch(setCategory(dataAliquotCategories.data[0]?.id))
  }, [dispatch, dataAliquotCategories])
  
  const allData = {
    header: dataHeader?.data.attributes,
    ...dataModules?.data?.attributes,
  }

  return (
    <div>
      <HeadSeo title='CEPA | Alicuotas' />
      <LayoutAliquots modules={allData} />
    </div>
  )
}

// Static Props
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('header', () => header.getAll());
  await queryClient.prefetchQuery('aliquots', () => aliquots.getAll());
  await queryClient.prefetchQuery('modules', () => modules?.getAll());
  await queryClient.prefetchQuery('aliquotCategories', () => aliquotCategories?.getAll());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
