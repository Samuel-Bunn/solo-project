import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import axios from "axios"
import './header.css'

const Header = ({isLoggedIn, setIsLoggedIn}) => {

    const logout = async () => {
        const res = await axios.post('logout')
        if (res.data.success) {
            setIsLoggedIn(false)
        }
    }

    return isLoggedIn ? (
        <>
            <div id="icons" >
                <BsFacebook /> <BsInstagram/> <BsTwitter/>
            </div>
            <div id='title'>
                <h1> The Combobulator </h1>
            </div>
            <div id="logoutDiv">
                <button id="logoutButton" onClick={(e) => logout()}>logout</button>   
            </div>
        </>    
    ) : (
        <>
            <div id="icons" >
                <BsFacebook /> <BsInstagram/> <BsTwitter/>
            </div>
            <div id='title'>
                <h1> The Combobulator </h1>
            </div>
            <div id="logoutDiv">
            </div>
        </>    
    )
}

export default Header