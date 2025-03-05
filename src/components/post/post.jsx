import './post.css'
import React from 'react';

export default function Post(){
    return(
        <div className='post'>
            

            <img className='postImg ' src='kitap.jpg' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCats'>Web Geliştirme</span>
                </div> 
                <span className='postTitle'>
                      Kitap Takip Sistemi
                </span>
            </div>
            <p className='postDesc'>
            Kullanıcıların okudukları ve okumak istedikleri kitapları yönetebileceği bir  plaftorm geliştirdim.
            </p>

            <img className='postImg ' src='mobil.jpg' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCats'>Mobil Uygulama</span>
                </div> 
                <span className='postTitle'>
                    Kotlin İle Mobil Uygulama Geliştirme
                </span>
            </div>
            <p className='postDesc'>
            Kotlin kullanarak çeşitli mobil uygulamalar geliştirdim. Bu uygulamalar farklı alanlarda kullanıcı ihtiyacına göre geliştirdiğim uygulamalardır.
            </p>

            <img className='postImg ' src='steam1.jpg' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCats'>Veri Tabanı</span>
                </div> 
                <span className='postTitle'>
                    Oyun Satış Platformu Veri Tabanı
                </span>
            </div>
            <p className='postDesc'>
            Oyunların, kullanıcıların ve satın alma işlemlerinin yönetildiği bir veritabanı geliştirdim. Kullanıcıların hesap oluşturup oyun satın alabileceği, oyun kütüphanelerini görüntüleyebileceği bir sistem tasarladım.
            
            </p>
            

            <img className='postImg ' src='odeme.png' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCats'>Dijital Ödeme Güvenliği</span>
                </div> 
                <span className='postTitle'>
                    Dijital Ödeme  Sistemlerinde Sahtekarlık Tespiti
                </span>
            </div>
            <p className='postDesc'>
            Dijital ödeme sistemlerinde gerçekleşen işlemler arasında sahtecilik vakalarını gerçek zamanlı olarak tespit edebilecek bir makine öğrenimi modeli geliştirdik.            </p>

            <img className='postImg ' src='dis.jpg' alt=''/>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCats'>Yapay Zeka</span>
                </div> 
                <span className='postTitle'>
                      Diş Eti Çekilmesi Tespiti
                </span>
            </div>
            <p className='postDesc'>
            Yapay zeka kullanarak diş eti çekilmesini otomatik olarak belirleyen bir sistem geliştirdik. Yüklenen medikal görüntüleri analiz ederek diş eti sağlığıyla ilgili bilgi veriyor ve uzmanlara destek olmayı amaçlıyor.
                
            </p>
        </div>
    )
}