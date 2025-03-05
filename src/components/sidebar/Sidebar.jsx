import './sidebar.css'
import React from 'react';


export default function Sidebar() {
    return(
        <div className='sidebar'>
           <div className="sidebarItem">
           <span className='sidebarTitle'>ABOUT ME</span>
           <img className='sidebarImg' src='foto5.png' alt=''/>
            <p class="sidebarText">Merhaba! Ben Hilem Nur Erdem, İnönü Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Yazılım geliştirme, mobil uygulamalar, web teknolojileri ve veri tabanı yönetimi alanlarında kendimi geliştiriyorum.

Kod yazmayı, yeni teknolojiler keşfetmeyi ve öğrendiklerimi projelere dönüştürmeyi seviyorum. Blogumda yazılım dünyasında edindiğim bilgileri, geliştirdiğim projeleri ve teknolojik yenilikleri paylaşacağım.
            </p>
           </div>
           <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORİES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Yapay Zeka</li>
                <li className='sidebarListItem'>Veri Tabanı</li>
                <li className='sidebarListItem'>Web Geliştirme</li>
                <li className='sidebarListItem'>Mobil Uygulama</li>
                <li className='sidebarListItem'>Dijital Ödeme Güvenliği</li>
            </ul>
           </div>
           <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-github"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
           </div>
        </div>
    );
}
