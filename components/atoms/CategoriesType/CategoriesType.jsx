// import { setCategory } from 'actions/aliquots';
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import styles from './SelectCategory.module.scss'

// const CategoriesType = ({ className = '' }) => {
//   const { aliquotCategories } = useSelector(state => state.aliquot)
//   const [isOpen, setIsOpen] = useState(false);
//   const [categoryName, setCategoryName] = useState(aliquotCategories[0]?.attributes.name);
//   const dispatch = useDispatch()

//   const handleClick = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleCategory = (id, name) => {
//     dispatch(setCategory(id))
//     setCategoryName(name)
//   }

//   useEffect(() => {
//     setCategoryName(aliquotCategories[0]?.attributes.name)
//   }, [setCategoryName, aliquotCategories])

//   return (
//     <div 
//       className={`${styles['select-category']} ${className} ${isOpen && styles.active}`} 
//       onClick={handleClick}
//     >
   
//     </div>
//   )
// }

// export default CategoriesType