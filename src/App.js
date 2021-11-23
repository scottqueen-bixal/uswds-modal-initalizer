import { useState } from 'react'
import ComboBox from './ComboBox'
import Modal from './Modal'
import '../node_modules/uswds/dist/css/uswds.min.css'

const Page1 = () => {
  return (
    <div>
      <Modal name="modal-one"/>
      <Modal name="modal-two"/>
      <Modal name="modal-three"/>
    </div>
  )
}

const Page2 = () => {
  return (
    <div>
      <Modal name="modal-four"/>
      <ComboBox name="combo-box-one"/>
      <ComboBox name="combo-box-two"/>
    </div>
  )
}

const App = () => {
  const [page, setPage] = useState(true)

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          {!page
            ? <Page2/>
            : <Page1/>
          }
        </div>
      </div>
      <button
        className="usa-button"
        onClick={(e) => setPage(!page)}>Toggle Page</button>
    </div>
  )
}

export default App

