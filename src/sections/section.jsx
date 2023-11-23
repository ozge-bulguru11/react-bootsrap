// sections/Section.jsx

import { Card } from '../components/Card';

const cardsData = [
  { image: 'src/public/assets/img1.jpg', content: 'Oyunlar ve Aktiviteler' },
  { image: 'src/public/assets/img2.jpg', content: 'El Becerileri Etkinlikleri' },
  { image: 'src/public/assets/img3.jpg', content: 'Dil Becerileri Geliştirme' },
  { image: 'src/public/assets/img4.jpg', content: 'Ebeveyn Rehberliği' },
  { image: 'src/public/assets/img5.jpg', content: 'Etkinlik Takvimi' },
  { image: 'src/public/assets/img6.jpg', content: 'Sağlık ve Gelişim Bilgileri' },
  { image: 'src/public/assets/img7.jpg', content: 'Müzik ve Ritim Atölyesi' },
  { image: 'src/public/assets/img8.jpg', content: 'Doğa ve Çevre Eğitimi' },
  { image: 'src/public/assets/img9.jpg', content: 'Sosyal Duygusal Gelişim' },
];

export default function Section() {
  return (
    <section className="pt-4 mb-5">
      <div className="container px-lg-5">
        <div id="backgroundC" className="text-center mx-auto p-5">
          <div className="row gx-lg-5">
            {cardsData.map((card, index) => (
              <div key={index} className="col-lg-6 col-xxl-4 mb-5 d-flex justify-content-center align-items-center">
                <Card
                  title={`Card ${index + 1} Title`}
                  content={card.content}
                  image={card.image}
                  alt={`Image ${index + 1} Alt Text`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
