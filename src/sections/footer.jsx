import React from 'react';

React

const footer=()=> {

    return (
      <>
      <footer className="site-footer pt-4 ">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <h3>Hakkımızda</h3>
            <p>Minik kelebek anaokulu, çocukların eşsiz potansiyellerini keşfetmelerine rehberlik eden bir okuldur. Nitelikli eğitimcilerimiz, sevgi dolu bir öğrenme ortamı sunarak her çocuğun bireysel güçlü yönlerini destekler.</p>
          </div>

          <div className="col-md-4 text-center">
            <h3>İletişim Bilgileri</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Cadde, Şehir, Ülke</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> info@minikkelebek.com</p>
          </div>

          <div className="col-md-4 text-center">
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li><a href="#">Eğitim Programları</a></li>
              <li><a href="#">Etkinliklerimiz</a></li>
              <li><a href="#">Kayıt İşlemleri</a></li>
              <li><a href="#">Bize Ulaşın</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Minik kelebek anaokulları. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
      </>
    );
  };
  
  export default footer;