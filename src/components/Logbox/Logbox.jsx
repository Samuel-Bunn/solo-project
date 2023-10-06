import { useSelector } from 'react-redux'
import './logbox.css'
import axios from 'axios'

const Logbox = ({setAllSaved, isLoggedIn}) => {

    let history = useSelector(state => state.history)

    let rows = history.map(conversion => {  
        return isLoggedIn ? (
            <div id="logRow">
                <p>{conversion}</p>
                <button onClick={(e) => addToSaved(conversion)} id="saveButton">Save</button>
            </div>
        ) : (
            <div id="logRow">
                <p>{conversion}</p>
            </div>
        )
    })

    const addToSaved = async (conversion) => {
        event.preventDefault()
        const res = await axios.post('/savedData', {conversion})
        setAllSaved(res.data)
    }
  
    return (
        <div id='logBox'>
                    
            <div id="logboxHeader">
                <h2>Conversion History</h2>
            </div> 
            <div id='logWindow'>
                {rows.reverse()}
            </div>
                    <div className='screw' id="screw5">
                        <div className='screwSlot' id="screwSlot5" ></div>
                    </div>
                    <div className='screw' id="screw6">
                        <div className='screwSlot' id="screwSlot6" ></div>
                    </div>
                    <div className='screw' id="screw7">
                        <div className='screwSlot' id="screwSlot7"></div>
                    </div>
                    <div className='screw' id="screw8">
                        <div className='screwSlot' id="screwSlot8"></div>
                    </div>
        </div>
    )
}

export default Logbox