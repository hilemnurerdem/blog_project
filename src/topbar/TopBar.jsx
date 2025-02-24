import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'> 
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'> HOME</li>
                    <li className='topListItem'> PROJECTS</li>
                    <li className='topListItem'> CONTACT</li>
                    <li className='topListItem'> ABOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImg' src='foto.jpg' alt='' />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>           
             </div>
        </div>
    )
}