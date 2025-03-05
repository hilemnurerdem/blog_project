import './settings.css'
import React from 'react';


export default function Settings(){
    return(
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <from className='settingsFrom'>
                    <lable>Profil Picture</lable>
                    <div className='settingsPP'>
                        <img src='anasayfa.png' alt=''/>
                        <label htmlFor='fileInput'>
                        <i className='settingsPPIcon fa-solid fa-user'></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type='text' />
                    <label>Surname</label>
                    <input type='surname' />
                    <label>email</label>
                    <input type='email' />
                    <label>password</label>
                    <input type='password'/>
                    <button className='settingsSubmit'>Update</button>
                </from>
            </div>
        </div>
    )
}