import { useSelector } from 'react-redux'
import './logbox.css'
import axios from 'axios'

const Logbox = ({setAllSaved}) => {

    let history = useSelector(state => state.history)

    let rows = history.map(conversion => {  
        return (
            <div id="logRow">
                <p>{conversion}</p>
                <button onClick={(e) => addToSaved(conversion)} id="saveButton">Save</button>
            </div>
        )
    })

    const addToSaved = async (conversion) => {
        // event.preventDefault()
        // console.log('hit')
        const res = await axios.post('/savedData', {conversion})
        console.log(res.data)
        setAllSaved(res.data)
    }
  
    return (
        <div id='logBox'>
            <div id="logboxHeader">
                <h2>Conversion History</h2>
            </div> 
            {rows.reverse()}
        </div>
    )
}

export default Logbox