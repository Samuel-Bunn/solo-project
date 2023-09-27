import axios from 'axios'
import './savedBox.css'
import LoginScreen from '../Login/Login'

const savedBox = ({saved, setAllSaved}) => {

    let savedRows = saved.map(({savedData, savedId}) => {
        return (
            <div id='savedRow'>
                <p> {savedData} </p>
                <button onClick={(e) => deleteSaved(savedId)} id='deleteButton'>Delete</button>
            </div>
        )
    })

    const deleteSaved = async (savedId) => {
        console.log('hit')
        const res = await axios.post(`/deleteData/${savedId}`)
        console.log(res.data)
        setAllSaved(res.data)
    }

    const logout = async () => {
        console.log('hit')
        await axios.post('logout')
    }

    return(
        <div id='savedBox'>
            <div id="savedHeader">
                <h2>Saved Conversions</h2>
                <button id="logoutButton" onClick={(e) => logout()}>logout</button>
            </div>
            {savedRows.reverse()}
        </div>
    )
}

export default savedBox