import Header from './components/Header/Header'
import LoginScreen from './components/Login/Login.jsx'
import Logbox from './components/Logbox/Logbox.jsx'
import Card from './components/Card/Card.jsx'
import Modal from './components/Modal/Modal.jsx'
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
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Header>
                </header>
                <main>

                    <div id="cardTable">
                    <Card cardNum={1}/>
                    <Card cardNum={2}/>
                    <Card cardNum={3}/>
                    </div>

                    <div id='logBoxes'>
                    <Logbox setAllSaved={setAllSaved} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <div id="spacer"></div>
                    <LoginScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} saved={allSaved} setAllSaved={setAllSaved} open={open} setOpen={setOpen} />
                    </div>
                </main>
                <footer></footer>
            </>
    )
}