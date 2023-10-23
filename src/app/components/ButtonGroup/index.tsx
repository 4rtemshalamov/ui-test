import Image from 'next/image'
import styles from './index.module.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { FC } from 'react'
import { VerticalButtonGroupProps } from './types'

export const VerticalButtonGroup: FC<VerticalButtonGroupProps> = (
  {
    buttons,
    position,
  }) => {

  const getPositionStyle = () => {
    switch (position) {
      case 'top-left':
        return { top: 0, left: 0 }
      case 'top-right':
        return { top: 0, right: 0 }
      case 'bottom-left':
        return { bottom: 0, left: 0 }
      case 'bottom-right':
        return { bottom: 0, right: 0 }
      default:
        return { top: '50%', left: '50%' }
    }
  }

  const positionStyle = getPositionStyle()

  // так как время ограничено, то я бы сделал рендер в DOM иконок не как картинку Image, а как svg.
  // так же склеил бы стили через classNames, удалось бы избежать лишнего div на 44 строке
  return (
    <div style={{ position: 'absolute', ...positionStyle }}>
      <Tooltip id='my-tooltip' place={'right'} offset={10} />
      <div className={styles.buttonWrapper}>
        {buttons.map((button) => (
          <button
            data-tooltip-id='my-tooltip'
            data-tooltip-content={button.hoverLabel}
            key={button.id}
            data-tip={button.label}
            data-for={`tooltip-${button.id}`}
            className={styles.iconButton}
            onClick={button.onClick}
          >
            <Image width='24' height='24' src={button.icon} alt={button.label} />
          </button>

        ))}
      </div>
    </div>
  )
}