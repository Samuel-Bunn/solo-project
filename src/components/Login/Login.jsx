import axios from "axios"
import React, {useState} from "react"
import "./login.css"
import SavedBox from '../savedBox/SavedBox.jsx'



const LoginScreen = ({saved, setAllSaved}) => {

    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const onLogin = async (event) => {
        event.preventDefault()
        const res = await axios.post('/login', {email, passw})
        console.log(res)
        if (res.data.success){
            setEmail('')
            setPassw('')
          setIsLoggedIn(true)
        }
      }

    return isLoggedIn ? (
        <div>
            <SavedBox saved={saved} setAllSaved={setAllSaved}></SavedBox>
        </div>
    ) : (
        <div>
            <form id="login" onSubmit={onLogin}>
                <h2>Please login to save conversions</h2>
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
                {/* <button id="signUp">Sign Up</button> */}
                <input type="submit" id="loginSubmit" />
            </form>
        </div> 
    )
}

export default LoginScreen

