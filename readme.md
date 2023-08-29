# React Stagger Text

StaggerText is React component for creating staggered text animations, by word or letter, when text enters viewport.

[Docs / Demo](https://stephenscaff.github.io/react-stagger-text/)

<br/>

## Contents

1. [📌 Features](#-features)
2. [🎯 Quickstart](#-quickstart)
3. [🤖 Commands](#-commands)
4. [🧬 Options](#-options)
5. [🕹️ Usage](#-usage)
6. [📓 Notes](#-notes)
7. [📅 To Dos](#-to-dos)

<br/>

## 📌 Features

- Built in Typescript
- Wraps words or letters inside spans so we can sequenly fade in each span.
- Animations use css transitions.
- Animations are triggered when text is in viewport, via Intersection Observer
- Options exist for animation start, start delay, and stagger duration, delay, and easing.
- Callback for when animation is complete

[Live Demo→](https://stephenscaff.github.io/react-stagger-text/)

<br/>

## 🎯 Quickstart

### Install package from npm

`npm i react-stagger-text`

### Use that thing

Import component and provide some text. Below instance will use all default values and stagger word-by-word.

```
import StaggerText from "react-stagger-text"

function SomeComponent() {
  return (
    <h1>
      <StaggerText>
        This text will be staggered by word
      </StaggerText>
    </h1>
  )
}
```

<br>

## 🤖 Commands

**Install** `npm i react-stagger-text` <br/>
**Build**: `npm run build` <br/>
**Dev**: `npm run dev` <br/>
**Demo Run**: `npm run demo:start` <br/>
**Demo Build**: `npm run demo:build` <br/>
**Demo Clean**: `npm run demo:clean` <br/>

### Dev

Runing `dev` fires up the docs/demo and begins watching `src`.

The docs/demo app is bundled with [`Parcel.js`](https://parceljs.org/) and served at [http://localhost:1234/](http://localhost:1234/).

### Dist

On build, `src` populates `dist` with commonjs, es, umd versions of the component.

<br/>

## 🧬 Options

<!-- prettier-ignore -->
| Option | Type | Description      | Default |
| ----   | ---- | -------- | -------|
| `shouldStart`    | `boolean`  | Flag that stars stagger transition/animation | `true` |
| `startTreshold`    | `number`  | Intersection Observer value between 0 and 1 representing the percentage component must be visible before stagger animation starts. | `0.1` |
| `startDelay`      | `number` | Delay before stagger animation starts  | `0` |
| `staggerType`    | `'word' \| 'letter'`  | Defines if stagger animation is by word or letter | `word` |
| `staggerDuration` | `number` | Duration of animation | `0.5` |
| `staggerDelay`  | `number` | Delay between staggers | `0.05` |
| `staggerEasing` | `string` | Custom easing to stagger transition-based animation  | `ease-in` |
| `hasInlineBlockWrapper` | `boolean` | Adds `inline-block` display to wrapping element    | `false`  |
| `onTransitionComplete`  | `() => void` | Callback when stagger animation fully completes  | `void` |
| `children` | `sring` | React children for providing text as string  | `null` |

<br/>

## 🕹️ Usage

### Stagger by letter

```
<StaggerText
  staggerType='letter'
  staggerDuration={0.4}
  startDelay={0.04}
>
 Let's go ahead and stagger this by letter.
</StaggerText>
```

### Stagger with extended start delay

```
<StaggerText
  staggerType='letter'
  staggerDuration={0.4}
  startDelay={0.04}
  startDelay={500}
>
 Let's go ahead and stagger this by letter with a start delay.
</StaggerText>
```

### Stagger with custom easing

```
<StaggerText
  staggerType='letter'
  staggerEasing='cubic-bezier(0.4, 0, 0.2, 1)'
>
 Stagger this text with custom easing
</StaggerText>
```

### Stagger with callback

```
const handleStaggerEnd = () => {
  console.log('sup ya'll, i'm dun')
}

<StaggerText
  onStaggerComplete={handleStaggerEnd}
>
  Stagger this text, then let em know
</StaggerText>
```

### Sequentially stagger multiple instances with callback and shouldStart

```
// Some data with titles and config
const lines = [
  {
    title: "Stagger this first line by word",
    staggerType: "word",
    staggerDelay: 0.09,
    staggerDuration: 0.7
  },
  {
    title: "And, stagger this line by letter after the first.",
    staggerType: "letter",
    staggerDelay: 0.04,
    staggerDuration: 0.4,
    startDelay: 300
  }
  // etc
]


// Component
import { useState } from 'react'

const StaggeredTextLines: React.FC<Props> = (lines) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Callback handler
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
    }
  )
}
```

<br/>

## 📓 Notes

### Smooth transitions

For smoother, less chopy transitions, favor longer `staggerDuration` and shorter `staggerDelay`. For example, `StaggerDuration={0.7} StaggerDelay={0.09}` provides a nice smooth effect by word. For letters, `StaggerDuration={0.5} StaggerDelay={0.04}` returns a smooth transition.

### Staggering a series of lines, sequentially

The stagger a series of lines, wrap each line in a component instances and leverage the `onStaggerComplete` callback and `shouldStart` prop. Ideally, you can do this dynamically with some data defining your text and prop config and `useState`. A complete example of this can be found above in [Useage](#-usage)

<br/>

## 📅 To Dos

- ~~Add callback for when stagger completes.~~
- ~~Add option for controling start of stagger~~
- Maybe remove span wrappers from dom once stagger completes?
- Maybe provide a method for restarting or even rewinding transitions?
- Provide addition animationType that slices text into view via translateY
- Add some proper tests

<br/>

Have fun ya'll.
