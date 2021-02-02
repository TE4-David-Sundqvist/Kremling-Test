import {useCss, k} from 'kremling'

export default function BlockRed() {
  const scope = useCss(css)

  return (
    <div className="container" {...scope}>
      <button className="big-button">
        A big button
      </button>
    </div>
  )
}

const css = k`
/* your CSS classes are scoped for this component and its children components */
& .container {
  border: 1px solid lightgray;
}

& .big-button {
  background: red;
  width: 40px;
  height: 60px;
}
`