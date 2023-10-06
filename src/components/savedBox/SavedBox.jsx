import { useEffect } from 'react'
import axios from 'axios'
import './savedBox.css'

const savedBox = ({saved, setAllSaved, isLoggedIn, setIsLoggedIn}) => {

    useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get('/fetchData')
                setAllSaved(response.data)
               }
               fetchData()
            }, [isLoggedIn])

    let savedRows = saved.map(({savedData, savedId}) => {
        return (
            <div id='savedRow'>
                <p> {savedData} </p>
                <button onClick={(e) => deleteSaved(savedId)} id='deleteButton'>Delete</button>
            </div>
        )
    })

    const deleteSaved = async (savedId) => {
        const res = await axios.post(`/deleteData/${savedId}`)
        setAllSaved(res.data)
    }

    

    return(
        <div id='savedBox'>
            <div id="savedHeader">
                <h2>Saved Conversions</h2>
                
            </div>
            <div id="saveWindow">
            {savedRows.reverse()}
            </div>
            
            <div className='screw' id="screw13">
                        <div className='screwSlot' id="screwSlot1" ></div>
                    </div>
                    <div className='screw' id="screw14">
                        <div className='screwSlot' id="screwSlot2" ></div>
                    </div>
                    <div className='screw' id="screw15">
                        <div className='screwSlot' id="screwSlot3"></div>
                    </div>
                    <div className='screw' id="screw16">
                        <div className='screwSlot' id="screwSlot4"></div>
                    </div>  
        </div>
    )
}

export default savedBox