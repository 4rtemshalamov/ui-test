'use client'
import styles from './page.module.css'
import { VerticalButtonGroup } from './components/ButtonGroup/index'
import { useState } from 'react'
import { Layers } from './components/Layers/index'


export default function Home() {
  const [popup, setPopup] = useState(false)
  const buttons = [
    {
      id: 1,
      icon: 'icons/Compass.svg',
      label: 'Button 1',
      hoverLabel: 'Компас',
      onClick: () => {
        // alert('Кнопка 1')
      },
    },
    {
      id: 2,
      icon: 'icons/Ruler.svg',
      label: 'Button 2',
      hoverLabel: 'Линейка',
      onClick: () => {
        // alert('Кнопка 2')
      },
    },
    {
      id: 3,
      icon: 'icons/Stack.svg',
      label: 'Button 3',
      hoverLabel: 'Слои',
      onClick: () => {
        console.log('123')
        setPopup(prevPopup => !prevPopup);
      },
    },
  ]

  return (
    <main className={styles.main}>
      <VerticalButtonGroup buttons={buttons} />
      {popup ? (
        <Layers />
      ) : null}
    </main>
  )
}
