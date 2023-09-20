import { useState } from 'react'
import { inchesToMm, ouncesToMl, fahrenheitToCelsius } from '../../../utils/equations'
import './Card.css'

const Card = () => {
    const [selectEqu, setSelectEqu] = useState('')
    const [valToConvert, setValToConvert] = useState(0)
    const [history, setHistory] = useState([])

    const masterConverter = () => {
    // switch case or if chain 
    // if vaule of dropdown then do equation
    // use value to convert state item for called conversion
    // use a spread operator to add to history array
    // [... history, fucntion ()]
    }
    


    return (
        <div className='card'>
                    <select onChange={e => setSelectEqu(e.target.value)}>
                        <option value="placeholder"> Please select a conversion</option>
                        <option value="1"> inches to mm </option>
                        <option value="2"> oz to liters</option>
                        <option value="3"> F to C</option>
                    </select>
                    <input onChange={e => setValToConvert(e.target.value)} type="text" id="valueInput" placeholder='input'></input>
                    <div>
                        <button id="swap">swap</button>
                        <button onClick={e => masterConverter()} id="convert">convert</button>
                    </div>
                    <div id="answerBox"> </div>
                </div>
    )
}

export default Card