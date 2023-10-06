import React from "react";
import axios from "axios";
import { useState } from "react";
import './modal.css'

const Modal = ({open, setOpen, setIsLoggedIn}) => {

    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleClose = () => {
        setOpen(false)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassw = (e) => {
        setPassw(e.target.value)
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value)
    }

    const handleSubmit = async () => {
        if( passw === confirm){
           const res = await axios.post('/signUp', {email, passw})
           if (res.data.success){
            setIsLoggedIn(true)
        } 
        } else {
            alert('Passwords do not match')
        } 
    }

    const submitWrapper = () => {
        handleSubmit()
        handleClose()
    }

return (
        <div id="modal" 
           style={ open ? 
            {display: 'flex'} : {display: 'none'}} >
            <div id="signUpWrapper" >
                <div id="signUpModal">
                <h2>Sign-up</h2>
                <form id="signUpForm">
                    <div className='screw' id="screw1">
                        <div className='screwSlot' id="screwSlot1" ></div>
                    </div>
                    <div className='screw' id="screw2">
                        <div className='screwSlot' id="screwSlot2" ></div>
                    </div>
                    <div className='screw' id="screw3">
                        <div className='screwSlot' id="screwSlot3"></div>
                    </div>
                    <div className='screw' id="screw4">
                        <div className='screwSlot' id="screwSlot4"></div>
                    </div>
                    <label className='label'>Email:</label>
                    <br/>
                    <input value = {email} className='modalInput' type='email' onChange={handleEmail} required/>
                    <br/>
                    <label className='label'>Password:</label>
                    <br/>
                    <input value = {passw} name="password" className='modalInput' type="text" onChange={handlePassw} required/>
                    <br/>
                    <label className="label">Re-enter Password:</label>
                    <input value = {confirm} className="modalInput" name="passwCheck" type="text" onChange={handleConfirm} required />
                    <input onClick={submitWrapper} className="modalButton" id="modalSubmit" type="submit"/> 
                </form>
                </div>
            </div>
            <div id="closeButtonDiv">
                <button className="modalButton" onClick={handleClose}> close</button>
            </div>
        </div>
    ) 
}

export default Modal