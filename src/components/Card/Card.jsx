import { useState } from 'react'
import { inchesToMm, ouncesToMl, fahrenheitToCelsius } from '../../../utils/equations'
import { useDispatch, useSelector } from 'react-redux'
import './Card.css'

const Card = () => {
    const [selectEqu, setSelectEqu] = useState(0)
    const [valToConvert, setValToConvert] = useState(0)
    const dispatch = useDispatch()
    const history = useSelector((state) => state.history)
    
    const masterConverter = () => {
        switch (selectEqu){
            case 1:  
                let mm = inchesToMm(valToConvert)
                dispatch({type: 'addHistory', payload: mm})
                break
            case 2:
                let ml = ouncesToMl(valToConvert)
                dispatch({type: 'addHistory', payload: ml})
                break
            case 3:
                let celsius = fahrenheitToCelsius(valToConvert)
                dispatch({type: 'addHistory', payload: celsius})
                break
        }
            console.log(history)
    }
    
    return (
        <div className='card'>
                    <select onChange={e => setSelectEqu(+e.target.value)}>
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
                    <div id="answerBox">{history[history.length - 1]}</div>
                </div>
    )
}

export default Card