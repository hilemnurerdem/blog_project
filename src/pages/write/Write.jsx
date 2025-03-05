import './write.css'
import React from 'react';


export default function Write(){
    return(
        <div className='write'>
            <img className='writeImg'
            src='anasayfa.png' alt=''
            />
            <from className='writeFrom'>
                <div className='writeFromGroup'>
                    <lable htlmFor= 'fileInput'>
                    <i className='writeIcon fa-solid fa-plus'></i>
                    </lable>
                    <input type='file' id='fileInput' />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFromGroup'>
                    <textarea placeholder='Tell your story....' 
                    type='text' 
                    className='writeInput write text'>
                    </textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </from>
        </div>
    )
}