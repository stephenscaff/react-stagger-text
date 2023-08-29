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

```
import StaggerText from "react-stagger-text"

function SomeComponent() {
  return (
    <h1>
      <StaggerText
        staggerDuration={0.7}
        staggerDelay={0.09}
      >
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

### Docs/Dev

The demo is bundled with [`Parcel.js`](https://parceljs.org/) and served up at [http://localhost:1234/](http://localhost:1234/).

### Dist

On build, `src` populates `dist` with commonjs, es, umd versions of the component.

<br/>

## 🕹️ Usage

```
import React from "react";
import StaggerText from "react-stagger-text"

function SomeText(title) {
  return (
    <section className="mast">
      <h1 className="mast__title">
        <StaggerText
          staggerType="letter"
          staggerDuration={0.7}
          staggerDelay={0.09}
          startDelay={10}
        >
          {title}
        </StaggerText>
      </h1>
    </section>
  )
}

```

<br/>

## 🧬 Options

<!-- prettier-ignore -->
| Option | Type | Description      | Default |
| ----   | ---- | -------- | -------|
| `shouldStart`    | `boolean`  | If animation should start | `true` |
| `startTreshold`    | `number`  | Amount in Viewport treshold (a la Intersection Observer) | `0.1` |
| `staggerType`    | `'word' \| 'letter'`  | Defines if stagger animation is by word or letter | `word` |
| `startDelay`      | `number` | Delay before animation starts  | `0` |
| `staggerDuration` | `number` | Duration of animation | `0.5` |
| `staggerDelay`  | `number` | Delay between staggers | `0.05` |
| `staggerEasing` | `string` | Custom easing to stagger transition-based animation  | `ease-in` |
| `hasInlineBlockWrapper` | `boolean` | Adds `inline-block` display to wrapping element    | `false`  |
| `onTransitionComplete`  | `() => void` | Callback when stagger animation fully completes  | `void` |
| `children` | `sring` | React children for providing text as string  | `null` |

<br/>

## 🎨 Examples

### Stagger by letter

```
<StaggerText
  staggerType='letter'
  staggerDuration={1}
  shouldAnimate={true}
  startDelay={10}
>
 Let's go ahead and stagger this by letter.
</StaggerText>
```

### Stagger with extended start delay

```
<StaggerText
  staggerType='letter'
  staggerDuration={0.9}
  shouldAnimate={true}
  startDelay={500}
>
 Let's go ahead and stagger this by letter.
</StaggerText>
```

### Stagger with custom easing

```
<StaggerText
  staggerType='letter'
  staggerDuration={1}
  staggerEasing='cubic-bezier(0.4, 0, 0.2, 1)'
>
 Stagger this text with custom easing
</StaggerText>
```

### Stagger with callback

```
const handleStaggerEnd = () => {
  console.log('sup, i'm dun')
}

<StaggerText
  staggerDuration={1}
  onStaggerComplete={handleStaggerEnd}
>
  Stagger this text, then let em know
</StaggerText>
```

### Sequentially stagger multiple instances with callback and shouldStart

```
const StaggeredTextLines: React.FC<Props> = (lines) => {
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
    }
  )
}
```

<br/>

## 📓 Notes

<br/>

## 📅 To Dos

- ~~Add callback for when stagger completes.~~
- ~~Add option for controling start of stagger~~
- Maybe remove span wrappers from dom once stagger completes?
- Provide addition animationType that slices text into view via translateY
- Add some proper tests

<br/>

Have fun ya'll.
