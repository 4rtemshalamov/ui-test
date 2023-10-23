import styles from './index.module.css'
import Image from 'next/image'
import { FC } from 'react'

// тут просто накидал что-то похожее. Но если подходить с умом, то надо выносить каждый отдельный компонент по типу
// checkbox, и потом отдельно склеивать из атомов в большой компонент

export const Layers: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperItem}>
        <div className={styles.groupCheckbox}>
          <input
            className={styles.checkbox}
            type='checkbox'
            checked={true}
            onChange={() => {
            }}
          />
          <p className={styles.p}>Кадастровые округа</p>
        </div>
        <Image width='24' height='24' src={'icons/Eye.svg'} alt={'eye'} />
      </div>
      <div className={styles.wrapperItem}>
        <div className={styles.groupCheckbox}>
          <input
            className={styles.checkbox}
            type='checkbox'
            checked={true}
            onChange={() => {
            }}
          />
          <p className={styles.p}>Кадастровые районы</p>
        </div>
        <Image width='24' height='24' src={'icons/Eye.svg'} alt={'eye'} />
      </div>
    </div>
  )
}