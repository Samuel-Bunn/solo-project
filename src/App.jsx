import LoginScreen from './components/Login/Login.jsx'
import Logbox from './components/Logbox/Logbox.jsx'
import Card from './components/Card/Card.jsx'
import Modal from './components/Modal/Modal.jsx'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { useState } from 'react'
import './App.css'

export default function App() {

    const [allSaved, setAllSaved] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [open, setOpen] = useState(false)

    return (
            <>
                <Modal open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />    
                <header>
                    <h1> The Combobulator </h1>
                    <div id="icons"> <BsFacebook/> <BsInstagram/> <BsTwitter/> </div>
                </header>
                <main id="cardTable">
                    <Card cardNum={1}/>
                    <Card cardNum={2}/>
                    <Card cardNum={3}/>
                </main>
                <section id='logBoxes'>
                    <Logbox setAllSaved={setAllSaved} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <LoginScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} saved={allSaved} setAllSaved={setAllSaved} open={open} setOpen={setOpen} />
                </section>
                <footer></footer>
            </>
    )
}