import {useCss, k} from 'kremling'

export default function BlockBlue() {
  useCss(css)

  return (
    <div className="container">
      <button className="big-button">
        A big button
      </button>
    </div>
  )
}

const css = k`
/* This CSS code is not scoped*/
.container {
  border: 1px solid lightgray;
}

.big-button {
  background: blue;
  width: 40px;
  height: 60px;
}
`