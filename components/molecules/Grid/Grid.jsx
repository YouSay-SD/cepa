import styles from './Grid.module.scss'
import { AliquotBox } from "../../atoms";

export const Grid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map(({ attributes, id }) => {
        return <AliquotBox key={id} id={id} {...attributes} />
      })}
    </div>
  )
}

export default Grid;