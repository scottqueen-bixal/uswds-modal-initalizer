import { useEffect, useRef } from 'react';
import { comboBox } from '../node_modules/uswds/src'

const ComboBox = ({ name }) => {
  const comboBoxRef = useRef()

  useEffect(() => {
    const comboBoxElement = comboBoxRef.current;
    comboBox.on(comboBoxElement)
    return () => {
      comboBox.off(comboBoxElement)
    }
  }, [comboBoxRef])

    return (
    <div id={name} ref={comboBox}>
      <label className="usa-label" htmlFor={name}>
        Select a fruit for {name}
      </label>
      <div className="usa-combo-box">
        <select className="usa-select" name={name} id={name}>
          <option value>Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="apricot">Apricot</option>
          <option value="avocado">Avocado</option>
          <option value="banana">Banana</option>
          <option value="blackberry">Blackberry</option>
          <option value="blood orange">Blood orange</option>
          <option value="blueberry">Blueberry</option>
          <option value="boysenberry">Boysenberry</option>
          <option value="breadfruit">Breadfruit</option>
        </select>
      </div>
    </div>
    );
};

export default ComboBox;
