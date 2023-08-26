//import { React, useState, useEffect } from 'react'
import DocsMast from './DocsMast'
import Docs from './Docs'
import data from './data/pageContent.json'

export default function App() {
  return (
    <>
      <DocsMast
        pretitle="React StaggerText by Stephen Scaff"
        lines={data.mast.lines}
      />
      <main>
        <section className="docs"></section>
        <Docs>
          <p className="docs__lead">
            You like Staggered text animations? Well, then this plugin might be
            for you. StaggerText is a React plugin that transitions in text
            either word-by-word, or letter-by-letter, as the text enters
            viewport.
          </p>
        </Docs>
      </main>
    </>
  )
}
