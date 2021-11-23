import { useEffect, useState } from 'react'
import { modal, comboBox } from '../node_modules/uswds/src'
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

  // when we call modal.off() we are just removing the
  // event listener, but when react unmounts, the nodes
  // created in the DOM still remain. So we have to remove
  // them durring the effect cleanup
  // const handleModalCleanup = () => {
  //   modal.off() // not sure this is tottally necessary here
  //   const modals = document.querySelectorAll('[role="dialog"]')
  //   Array.from(modals, x => x.remove())
  // }

  useEffect(() => {
    modal.on()
    comboBox.on()
    return () => {
      // handleModalCleanup()
      modal.off()
      comboBox.off()
    }
  }, [page])

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

