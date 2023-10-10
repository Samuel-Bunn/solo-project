import axios from "axios"
import React, {useState} from "react"
import "./login.css"
import SavedBox from '../savedBox/SavedBox.jsx'

const LoginScreen = ({saved, setAllSaved, isLoggedIn, setIsLoggedIn, setOpen}) => {

    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    
    const onLogin = async (event) => {
        event.preventDefault()
        const res = await axios.post('/login', {email, passw})
        if (res.data.success){
            setEmail('')
            setPassw('')
          setIsLoggedIn(true)
        }
      }
      
    const handleOpen = () => {
        setOpen(true)
    }

    return isLoggedIn ? (
        <div>
            <SavedBox saved={saved} setAllSaved={setAllSaved} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></SavedBox>
        </div>
    ) : (
        <>
            <form id="loginForm" onSubmit={onLogin}>
                <div id="loginHeader">
                    <h2>Please login to save conversions</h2>
                </div>
                <div id="loginInputForm">
                    <input
                        type="text"
                        name="loginEmail"
                        className="loginInputs"
                        id="loginEmail"
                        value={email}
                        placeholder="Please enter Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        name="loginPassw"
                        className="loginInputs"
                        id="loginPassw"
                        value={passw}
                        placeholder="Please enter Password"
                        required
                        onChange={(e) => setPassw(e.target.value)}
                    />
                    <a href="#" id="signUpLink" onClick={handleOpen} > Sign-up </a>
                    <input type="submit" id="loginSubmit" />
                </div>
                    <div className='screw' id="screw9">
                        <div className='screwSlot' id="screwSlot1" ></div>
                    </div>
                    <div className='screw' id="screw10">
                        <div className='screwSlot' id="screwSlot2" ></div>
                    </div>
                    <div className='screw' id="screw11">
                        <div className='screwSlot' id="screwSlot3"></div>
                    </div>
                    <div className='screw' id="screw12">
                        <div className='screwSlot' id="screwSlot4"></div>
                    </div>  
            </form>
         
        </>    
    )
}

export default LoginScreen

