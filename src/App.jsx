import LoginScreen from './components/Login/Login.jsx'
import Logbox from './components/Logbox/logbox.jsx'
import Card from './components/Card/Card.jsx'
import './App.css'

export default function App() {
    return (
        <>
            <header>
                <h1> The Converter </h1>
            </header>

            <main id="cardTable">
                <Card></Card>
            </main>

            <section id='logBoxes'>
                <Logbox></Logbox>
                <button id="saveButton">Save</button>
                <LoginScreen></LoginScreen>
            </section>  
        </>
    )
}