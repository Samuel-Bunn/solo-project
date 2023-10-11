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
                <a href="https://www.facebook.com/"><BsFacebook/> </a>
                <a href="https://www.instagram.com/"><BsInstagram/></a>
                <a href="https://twitter.com/"><BsTwitter/></a> 
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
                <a href="https://www.facebook.com/"><BsFacebook/> </a>
                <a href="https://www.instagram.com/"><BsInstagram/></a>
                <a href="https://twitter.com/"><BsTwitter/></a> 
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