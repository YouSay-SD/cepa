import styles from './Grid.module.scss'
import { AliquotBox, Pagination } from "../../atoms";

export const Grid = ({ items, paginatedItems }) => {
  return (
    <div>
      <div className={styles.grid}>
        {paginatedItems.map(({ attributes, id }, index) => {
          return (
            <AliquotBox 
              key={id} 
              index={index + 1} 
              {...attributes}
            />
          )
        })}
      </div>

      <Pagination
        items={items}
        itemsPerPage={12}
      />
    </div>
  )
}

export default Grid;