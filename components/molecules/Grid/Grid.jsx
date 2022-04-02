import styles from './Grid.module.scss'
import { AliquotBox, Pagination } from "../../atoms";

export const Grid = ({ items, paginatedItems }) => {
  return (
    <div>
      <div className={styles.grid}>
        {paginatedItems.map(({ attributes, id }) => {
          return <AliquotBox key={id} id={id} {...attributes} />
        })}
      </div>

      <Pagination
        items={items}
        itemsPerPage={3}
      />
    </div>
  )
}

export default Grid;