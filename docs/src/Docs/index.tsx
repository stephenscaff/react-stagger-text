import { ReactNode } from 'react'
import './style.scss'

interface DemoDocsProps {
  children: ReactNode
}

function DemoDocs({ children }: DemoDocsProps) {
  return (
    <section className="docs">
      <div className="grid">{children}</div>
    </section>
  )
}

export default DemoDocs
