import { useState } from 'react'
import { inchesToMm, ouncesToMl, fahrenheitToCelsius } from '../../../utils/equations'
import { useDispatch, useSelector } from 'react-redux'
import './Card.css'

const Card = ({cardNum}) => {
    const [selectEqu, setSelectEqu] = useState(0)
    const [valToConvert, setValToConvert] = useState('')
    const [cardAnswer, setCardAnswer] = useState()
    const history = useSelector((state) => state.history)
    const dispatch = useDispatch()
    
    const masterConverter = () => {
        switch (selectEqu){
            case 1:  
                let mm = inchesToMm(valToConvert)
                dispatch({type: 'addHistory', payload: mm})
                setCardAnswer(mm)
                setValToConvert('')
                break
            case 2:
                let ml = ouncesToMl(valToConvert)
                dispatch({type: 'addHistory', payload: ml})
                setCardAnswer(ml)
                setValToConvert('')
                break
            case 3:
                let celsius = fahrenheitToCelsius(valToConvert)
                dispatch({type: 'addHistory', payload: celsius})
                setCardAnswer(celsius)
                setValToConvert('')
                break
        }
    }

  
    return (
        <div className={`card card-num-${cardNum}`} >
                    <div className='screw' id="screw1">
                        <div className='screwSlot' id="screwSlot1" ></div>
                    </div>
                    <div className='screw' id="screw2">
                        <div className='screwSlot' id="screwSlot2" ></div>
                    </div>
                    <div className='screw' id="screw3">
                        <div className='screwSlot' id="screwSlot3"></div>
                    </div>
                    <div className='screw' id="screw4">
                        <div className='screwSlot' id="screwSlot4"></div>
                    </div>
                    <select onChange={e => setSelectEqu(+e.target.value)}>
                        <option value="placeholder"> Select a conversion</option>
                        <option value="1"> inches to mm </option>
                        <option value="2"> oz to liters</option>
                        <option value="3"> F to C</option>
                    </select>
                    <input onChange={e => setValToConvert(e.target.value)} value={valToConvert} type="text" id="valueInput" placeholder='Value to convert'></input>
                    <div>
                        <button onClick={e => masterConverter()} id="convert">Combobulate!</button>
                    </div>
                    <div id="answerBox"> {cardAnswer} </div>
                </div>
    )
}

export default Card