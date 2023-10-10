import { useState } from 'react'
import { inchesToMm, ouncesToMl, fahrenheitToCelsius, mmToInches, mlToOunces, celsiusToFahrenheit, kiloToMiles, milesToKilo, feetToMiles, gramToOunce, ounceToGram } from '../../../utils/equations'
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
                let inches = mmToInches(valToConvert)
                dispatch({type: 'addHistory', payload: inches})
                setCardAnswer(inches)
                setValToConvert('')
                break
            case 3:
                let miles1 = kiloToMiles(valToConvert)
                dispatch({type: 'addHistory', payload: miles1})
                setCardAnswer(miles1)
                setValToConvert('')
                break
            case 4: 
                let kilo = milesToKilo(valToConvert)
                dispatch({type: 'addHistory', payload: kilo})
                setCardAnswer(kilo)
                setValToConvert('')
                break
            case 5: 
                let feet = milesToFeet(valToConvert)
                dispatch({type: 'addHistory', payload: feet})
                setCardAnswer(feet)
                setValToConvert('')
                break
            case 6:
                let miles2 = feetToMiles(valToConvert)
                dispatch({type: 'addHistory', payload: miles2})
                setCardAnswer(miles2)
                setValToConvert('')
                break
            case 7: 
                let ounces1 = gramToOunce(valToConvert)
                dispatch({type: 'addHistory', payload: ounces1})
                setCardAnswer(ounces1)
                setValToConvert('')
            case 8: 
                let gram = ounceToGram(valToConvert)
                dispatch({type: 'addHistory', payload: gram})
                setCardAnswer(gram)
                setValToConvert('')
                break
            case 9:
                let ml = ouncesToMl(valToConvert)
                dispatch({type: 'addHistory', payload: ml})
                setCardAnswer(ml)
                setValToConvert('')
                break
            case 10: let ounces2 = mlToOunces(valToConvert)
                dispatch({type: 'addHistory', payload: ounces2})
                setCardAnswer(ounces2)
                setValToConvert('')
                break
            case 11:
                let celsius = fahrenheitToCelsius(valToConvert)
                dispatch({type: 'addHistory', payload: celsius})
                setCardAnswer(celsius)
                setValToConvert('')
                break
            case 12:
                let fahrenheit = celsiusToFahrenheit(valToConvert)
                dispatch({type: 'addHistory', payload: fahrenheit})
                setCardAnswer(fahrenheit)
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
                        <option value="placeholder"> -Select a Conversion- </option>
                        <option value="1"> Inches to Milimeters </option>
                        <option value="2"> Milimeters to Inches </option>
                        <option value="3"> Kilometer to Miles </option>
                        <option value="4"> Miles to Kilometers </option>
                        <option value="5"> Miles to Feet </option>
                        <option value="6"> Feet to Miles </option>
                        <option value="7"> Grams to Ounces </option>
                        <option value="8"> Ounces to Grams </option>
                        <option value="9"> Fluid Ounces to Mililiters </option>
                        <option value="10"> Mililiters to Fluid Ounces </option>
                        <option value="11"> Fahrenheit to Celsius</option>
                        <option value="12"> Celsius to Fahrenheit</option>
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