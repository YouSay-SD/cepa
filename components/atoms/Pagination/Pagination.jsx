import styles from './Pagination.module.scss'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'actions/general';

const Pagination = ({page, items, itemsPerPage, setPage}) => {
  const { currentPage } = useSelector(state => state.general)
  const pages = Math.ceil(items.length / itemsPerPage);
  const dispatch = useDispatch();

  const handleCurrentPage = (id) => {
    dispatch(setCurrentPage(id))
  }

  return (
    (
      pages !== 1 && (
        <div className={styles.pagination} >
          {
            [...Array(pages)].map((x, i) => {
              return (
                <div 
                  key={i} 
                  className={`${styles.index} ${i === currentPage && styles.active}`} 
                  onClick={() => handleCurrentPage(i)}
                >
                  <p>{i+1}</p>
                </div>
              )
            })
          }
          {
            currentPage + 1 < pages && 
              <div 
                className={styles.next}
                onClick={() => handleCurrentPage(currentPage + 1)}
              >
                <Image 
                  src='/img/icons/arrow-next-pagination.svg' 
                  alt='Next Page' 
                  width={7.5} 
                  height={14} 
                />
              </div>
          }
        </div>
      )
    )
  )
}

export default Pagination