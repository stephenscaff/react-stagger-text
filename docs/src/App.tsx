// @ts-no-check
import DocsMast from './DocsMast'
import Docs from './Docs'
import DocsCode from './DocsCode'
import DocsTable from './DocsTable'
import DocsFooter from './DocsFooter'
import StaggerText from '../../src'
import HTMLParser from './HTMLParser'
import data from './data/content.json'

export default function App() {
  return (
    <>
      {/* @ts-ignore */}
      <DocsMast pretitle="React StaggerText" lines={data.mast.lines} />
      <main>
        <Docs>
          <p>{data.intro.lead}</p>

          <h2 id={data.features.id} className="docs__title">
            <StaggerText staggerType="letter">
              {data.features.title}
            </StaggerText>
          </h2>
          <ul className="docs-list">
            {data.features.items.map((item, index) => (
              <li key={'docs-list' + index}>
                <HTMLParser html={item} />
              </li>
            ))}
          </ul>

          <h2 className="docs__title">
            <StaggerText staggerType="letter">
              {data.quickStart.title}
            </StaggerText>
          </h2>

          <p>{data.quickStart.install}</p>
          <DocsCode language="tsx">{`npm install react-stagger-text`}</DocsCode>

          <p className="docs__description">
            <HTMLParser html={data.quickStart.use} />
          </p>

          <DocsCode language="tsx">
            {`import StaggerText from "react-stagger-text"
  
  function TextComponent() {
    return (
      <section className="mast">
        <h1 className="mast__title">
          <StaggerText
            staggerDuration={0.7}
            staggerDelay={0.09}
          >
            This text will be staggered by word
          </StaggerText>
        </h1>
      </section>
    )
  }
`}
          </DocsCode>
          <h2 id={data.options.id} className="docs__title">
            <StaggerText staggerType="letter">{data.options.title}</StaggerText>
          </h2>
          <DocsTable options={data.options.optionsTable} />

          <h2 id={data.useage.id} className="docs__title">
            <StaggerText staggerType="letter">{data.useage.title}</StaggerText>
          </h2>
          <h5 className="docs__subtitle">Stagger by letter</h5>
          <DocsCode language="tsx">
            {`<StaggerText
  staggerType='letter'
  staggerDuration={1}
  shouldAnimate={true}
  startDelay={10}
>
  Let's go ahead and stagger this by letter.
</StaggerText>
`}
          </DocsCode>

          <h5 className="docs__subtitle">Stagger with extended start delay</h5>
          <DocsCode language="tsx">{`<StaggerText
  staggerType='letter'
  staggerDuration={1}
  shouldAnimate={true}
  startDelay={100}
>
 Let's go ahead and stagger this by letter.
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">Stagger with custom easing</h5>
          <DocsCode language="tsx">{`<StaggerText
  staggerType='letter'
  staggerDuration={1}
  staggerEasing='cubic-bezier(0.4, 0, 0.2, 1)'
>
Stagger this text with custom easing
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">Stagger with callback</h5>
          <DocsCode language="tsx">{`const handleStaggerEnd = () => {
  console.log('stagger is dunzo')
}

<StaggerText
  staggerDuration={1}
  onStaggerComplete={handleStaggerEnd}
>
  Stagger with a callback on stagger end
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">
            Sequentially start stagger instances
          </h5>
          <DocsCode language="tsx">{`const StaggeredTextLines: React.FC<Props> = (lines) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleStaggerComplete = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }
  return (
    {lines.map((line, index) => (
      <StaggerText
        key={index}
        onStaggerComplete={
          index === currentIndex ? handleStaggerComplete : null
        }
        shouldStart={index === currentIndex}
        startDelay={line.startDelay}
        staggerType={line.staggerType}
        staggerDuration={line.staggerDuration}
        staggerDelay={line.staggerDelay}
      >
        {line.title}
      </StaggerText>
  )
)}
`}</DocsCode>

          <h2 id={data.notes.id} className="docs__title">
            <StaggerText staggerType="letter">{data.notes.title}</StaggerText>
          </h2>

          {data.notes.items.map((item, index) => (
            <div key={'docs-item' + index} className="docs-item">
              <h5 className="docs-item__title">{item.title}</h5>
              <HTMLParser html={item.content} />
            </div>
          ))}

          <h2 id={data.todos.id} className="docs__title">
            <StaggerText staggerType="letter">{data.todos.title}</StaggerText>
          </h2>
          <ul className="docs-list">
            {data.todos.items.map((item, index) => (
              <li key={'docs-list' + index}>
                <HTMLParser html={item} />
              </li>
            ))}
          </ul>
        </Docs>
      </main>
      <DocsFooter />
    </>
  )
}
