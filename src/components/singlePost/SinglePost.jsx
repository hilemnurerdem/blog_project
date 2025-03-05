import './singlePost.css'
import React from 'react';

export default function singlePost() {
    return(
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img 
                src='kitap.jpg' alt=''
                className='singlePostImg'
                />
                <h1 className='singlePostTitle'>
                Kitap Takip Sistemi
                <div className='singlePostEdit'>
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: <b>Hilem Nur Erdem</b>
                    </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                Flask ve SQLite kullanarak geliştirdiğim bu web sitesi, kullanıcıların kişisel kütüphanelerini oluşturup yönetebileceği bir kitap takip sistemidir. Kullanıcılar siteye kayıt olup giriş yaparak kendilerine özel bir hesap oluşturur ve tüm verileri güvenli bir şekilde SQLite veritabanında saklanır. Bu sayede her kullanıcı yalnızca kendi kitaplarını görebilir ve yönetebilir, başka kullanıcıların kütüphanelerine erişemez.

Sistem, kullanıcıların kitap ekleme, güncelleme, silme ve görüntüleme işlemlerini kolayca yapmasını sağlar. Yeni bir kitap eklediğinde, sisteme otomatik olarak benzersiz bir kitap ID’si atanır, böylece her kitap sistemde özgün olarak kaydedilir. Kullanıcı, kitabı eklerken kitap adı, yazar adı, bulunduğu yer (örneğin evde, ofiste, kütüphanede vs.), kategori gibi bilgileri girebilir. Böylece kitaplarını detaylı bir şekilde düzenleyerek kütüphanesini daha verimli yönetebilir.

Kitap sayısı arttıkça, kullanıcının kitaplarını bulmasını kolaylaştırmak için gelişmiş bir arama fonksiyonu da bulunmaktadır. Kullanıcılar kitap adı, yazar adı, kategori veya bulunduğu yer gibi kriterlere göre arama yaparak kütüphanelerindeki kitaplara hızlıca ulaşabilirler. Aynı zamanda sistem, kitap bilgilerini güncelleme ve silme özelliklerini de sunarak kullanıcıların arşivlerini istedikleri gibi yönetmelerine olanak tanır.

Kullanıcıların güvenliği ve veri bütünlüğü ön planda tutulmuştur. Şifreler güvenli bir şekilde saklanır, böylece yetkisiz erişim önlenmiş olur. Kullanıcılar yalnızca kendi hesaplarına giriş yaparak kendi ekledikleri kitaplara erişebilirler.

Bu sistem, kitaplarını düzenli bir şekilde takip etmek, birden fazla kitabı aynı anda yönetmek ve kütüphane kayıtlarını dijital bir ortamda saklamak isteyenler için kullanıcı dostu, güvenli ve pratik bir çözüm sunmaktadır </p>

            </div>
        </div>
    )
}