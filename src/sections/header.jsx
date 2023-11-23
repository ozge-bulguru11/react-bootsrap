import React from 'react';
import { Carousel } from 'react-bootstrap';
React

const header=()=> {

    return (
      <>
      
      <div>
      <header className="py-5">
      <Carousel>

        <Carousel.Item>
       
      <div className='container p-4 p-lg-5'>
      <div id='backgroundY' className="text-center mx-auto p-5 ">
      <div className="m-4 m-lg-5">
        <h1 className="fw-bold ">Yüksek kalite ve standartta bir anaokulu</h1>
        <p className="fs-4 "> Çocukların eşsiz potansiyellerini keşfetmelerine rehberlik eden, sevgi dolu bir öğrenme ortamı yaratmayı taahhüt ediyoruz. Nitelikli eğitimcilerimiz, her çocuğun bireysel güçlü yönlerini destekleyerek, öğrenmeye olan tutkularını geliştirmelerini sağlar. Gelişim Akademisi olarak, her çocuğun kendine güvenen, bilgiye aç, sosyal becerilere sahip ve dünya vatandaşı olarak yetişmesine katkıda bulunmayı hedefliyoruz.</p>
        <button id='buttonC' className="btn btn-lg ">Kurumsal</button>
        </div>
        </div>
      </div>
    
        </Carousel.Item>

        <Carousel.Item>
       
      <div className='container p-4 p-lg-5'>
      <div id='backgroundY' className="text-center mx-auto p-5 ">
      <div className="m-4 m-lg-5">
        <h1 className="fw-bold ">Neden Minik Kelebek diğerlerinden daha iyi?</h1>
        <p className="fs-4 "> Doğa, minik öğrencilerimizin en iyi öğretmenidir. İlkbaharın renk cümbüşleri, yazın sıcak güneşi, sonbaharın rüzgarı ve kışın beyaz örtüsü; hepsi, çocuklarımızın merakını canlandırır. Biz, okul öncesi eğitimde doğayı bir sınıf olarak görüyoruz. Çocuklarımızın, toprağa dokunmanın, ağaçların altında oyun oynamanın ve çiçeklerle dostluk kurmanın öğrenimlerini yaşamasına olanak tanıyan bir ortam yaratmayı hedefliyoruz. Doğa, bir sınıf olmanın ötesinde, bir öğretmen ve rehberdir. Minik öğrencilerimiz, bu doğal sınıfta, hem kendilerini hem de dünyayı daha derinlemesine anlamaya başlarlar.</p>
        </div>
        </div>
      </div>
      
        </Carousel.Item>

        <Carousel.Item>
        
      <div className='container p-4 p-lg-5'>
      <div id='backgroundY' className="text-center mx-auto p-5 ">
      <div className="m-4 m-lg-5">
        <h1 className="fw-bold "> Kurucularımız kimlerdir?</h1>
        <p className='fs-4'> Okul öncesi kurucularımız, çocukların hayatlarının en önemli aşamasında onlara rehberlik etmeyi taahhüt ederler. Bu vizyoner liderler, eğitimin temel taşlarını oluşturarak her bir çocuğun benzersiz potansiyelini açığa çıkarma amacını taşır. Nitelikli eğitimcilerden oluşan ekibimiz, çocukların güvenli, destekleyici ve öğrenmeye teşvik eden bir çevrede gelişmelerini sağlamak için bir araya gelir. Her bir çocuğun sevgi dolu bir öğrenme ortamında kendini keşfetmesine ve geliştirmesine odaklanıyoruz.</p>
        <button id='buttonC' className="btn btn-lg ">Kurucularımız</button>
        </div>
        </div>
      </div>
     
        </Carousel.Item>
      </Carousel>
    </header>
    </div>
    
      </>
    );
  }
  
  export default header;