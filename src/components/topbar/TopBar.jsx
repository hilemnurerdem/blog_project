import { Link } from 'react-router-dom';
import './topbar.css'
import React from 'react';


export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            {user ? <p></p> : <p>Please log in</p>}

            <div className='topLeft'> 
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'> 
                        <Link className='link' to='/' >HOME</Link>
                    </li>
                    <li className='topListItem'> 
                    <Link className='link' to='/' >PROJECTS</Link>
                    </li>
                    <li className='topListItem'> 
                    <Link className='link' to='/' >CONTACT</Link>
                    </li>
                    <li className='topListItem'> 
                    <Link className='link' to='/' >WRİTE</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className='link' to='/' >ABOUT</Link>
                    </li>
                    <li className='topListItem'> 
                        {user && 'LOG OUT'}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                        <img className='topImg' src='foto.jpg' alt='' />


                    ): (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>
                                LOGİN 
                                </Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>
                                REGİSTER
                                </Link>
                            </li>
                        </ul>
                    )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>           
             </div>
        </div>
        
    )
}