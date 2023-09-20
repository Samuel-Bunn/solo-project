import axios from "axios"
import React, {useState} from "react"
import "./login.css"
// import { useNavigate } from "react-router-dom"


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const navigate = useNavigate()

    const onLogin = async (event, FormData) => {
        console.log(hit)
        event.preventDefault()
        const res = await axios.post('/login', FormData)
        if (res.data.success){
          setIsLoggedIn(true)
        }
      }

    return isLoggedIn ? (
        <div>
            {/* todo set up logged in save box */}
        </div>
    ) : (
        <div>
            <form id="login" onSubmit={(e) => {
                onLogin(e, {email: email, passw: passw, })
            }}>
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

