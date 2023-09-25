import { useSelector } from 'react-redux'
import './logbox.css'

const Logbox = () => {

    let history = useSelector(state => state.history)

    let rows = history.map(conversion => {  
        return (
            <div id="logRow">
                <label htmlFor="saveButton"></label>
                <p>{conversion}</p>
                <button id="saveButton">Save</button>
                {/* add event handler for save button */}
            </div>
        )
    })

    const addToSaved = () => {
        
    }
  
    return (
        <div id='logBox'>
             <h2>Conversion History</h2>
            {rows.reverse()}
        </div>
    )
}

export default Logbox