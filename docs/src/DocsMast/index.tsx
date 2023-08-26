import { useState } from 'react'
import StaggerText from '../../../src'
import './style.scss'

interface DocsMastProps {
  pretitle: string
  lines: {
    title?: string
    staggerType?: 'word' | 'letter'
    staggerDelay?: number
    staggerDuration?: number
  }[]
}

function DocsMast({ pretitle, lines }: DocsMastProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleStaggerComplete = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }
  return (
    <section className="mast">
      <div className="grid">
        <header className="mast__header">
          <div className="mast__pretitle">{pretitle}</div>
          <h1 className="mast__title">
            {lines.map((line, index) => (
              <StaggerText
                key={index}
                onStaggerComplete={
                  index === currentIndex ? handleStaggerComplete : null
                }
                shouldStart={index === currentIndex}
                staggerType={line.staggerType}
                staggerDuration={line.staggerDuration}
                staggerDelay={line.staggerDelay}
              >
                {line.title}
              </StaggerText>
            ))}
          </h1>
          <img
            className="mast__eyes"
            src="https://media1.giphy.com/media/eNMFnkhf7qEtGaOGEg/giphy.gif?cid=ecf05e477h2yy1favsd3ws52q9pnpuq48t43qlfiyrl7qufs&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </header>
      </div>
    </section>
  )
}

export default DocsMast
