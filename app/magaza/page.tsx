import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { ShoppingCart, ExternalLink, Settings, Wrench, Zap, Shield, Bookmark, ChevronRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'BBD GARAGE | Mağaza',
  description: 'BBD GARAGE mağazasında motosiklet parçaları ve aksesuarları için kaliteli ürünleri uygun fiyatlarla bulabilirsiniz.',
};

// Kategori verileri
const categories = [
  {
    id: 1,
    name: 'Motor Parçaları',
    description: 'Silindir, piston, krank mili ve daha fazlası',
    icon: <Settings size={32} className="text-primary-600" />,
    image: '/images/category-motor.jpg',
    url: 'https://bbdstore.com/kategoriler/motor-parcalari'
  },
  {
    id: 2,
    name: 'Yağlar ve Kimyasallar',
    description: 'Motor yağları, şanzıman yağları, katkılar ve temizleyiciler',
    icon: <Zap size={32} className="text-primary-600" />,
    image: '/images/category-oils.jpg',
    url: 'https://bbdstore.com/kategoriler/yaglar-kimyasallar'
  },
  {
    id: 3,
    name: 'Filtreler',
    description: 'Yağ, hava, yakıt ve polen filtreleri',
    icon: <Shield size={32} className="text-primary-600" />,
    image: '/images/category-filters.jpg',
    url: 'https://bbdstore.com/kategoriler/filtreler'
  },
  {
    id: 4,
    name: 'Fren Sistemleri',
    description: 'Balatalar, diskler, kaliperler ve hidrolik sistemler',
    icon: <Bookmark size={32} className="text-primary-600" />,
    image: '/images/category-brakes.jpg',
    url: 'https://bbdstore.com/kategoriler/fren-sistemleri'
  },
  {
    id: 5,
    name: 'Aydınlatma',
    description: 'Farlar, sinyal lambaları, LED sistemler',
    icon: <Zap size={32} className="text-primary-600" />,
    image: '/images/category-lighting.jpg',
    url: 'https://bbdstore.com/kategoriler/aydinlatma'
  },
  {
    id: 6,
    name: 'Bakım Ürünleri',
    description: 'Temizleyiciler, koruyucular ve bakım kitleri',
    icon: <Wrench size={32} className="text-primary-600" />,
    image: '/images/category-maintenance.jpg',
    url: 'https://bbdstore.com/kategoriler/bakim-urunleri'
  },
  {
    id: 7,
    name: 'Ekipman ve Aksesuarlar',
    description: 'Kasklar, eldivenler, ceketler ve koruyucu giysiler',
    icon: <Shield size={32} className="text-primary-600" />,
    image: '/images/category-gear.jpg',
    url: 'https://bbdstore.com/kategoriler/ekipman-aksesuarlar'
  },
  {
    id: 8,
    name: 'Bakım & Servis Hizmetleri',
    description: 'Periyodik bakım, tamir ve özel servis hizmetleri',
    icon: <Wrench size={32} className="text-primary-600" />,
    image: '/images/category-service.jpg',
    url: 'https://bbdstore.com/hizmetler/bakim-servis'
  },
];

// Servis verileri
const services = [
  {
    id: 1,
    name: 'Periyodik Bakım',
    description: 'Motosikletiniz için düzenli bakım hizmetleri',
    icon: <Settings size={24} className="text-white" />,
    url: 'https://bbdstore.com/hizmetler/periyodik-bakim'
  },
  {
    id: 2,
    name: 'Motor Revizyonu',
    description: 'Profesyonel motor tamir ve revizyon hizmetleri',
    icon: <Wrench size={24} className="text-white" />,
    url: 'https://bbdstore.com/hizmetler/motor-revizyonu'
  },
  {
    id: 3,
    name: 'Performans Artırma',
    description: 'Motosikletiniz için özel performans çözümleri',
    icon: <Zap size={24} className="text-white" />,
    url: 'https://bbdstore.com/hizmetler/performans-artirma'
  },
];

export default function StorePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/store-hero.jpg"
            alt="BBD GARAGE Mağazası"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-white">
          <h1 className="heading-xl text-center mb-4 animate-fade-in">Mağaza</h1>
          <p className="text-xl text-center max-w-3xl px-4 animate-fade-in">
            Motosiklet yedek parçaları ve aksesuarları için kaliteli ürünlerimize göz atın
          </p>
          <div className="mt-8">
            <a 
              href="https://bbdstore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <ShoppingCart size={18} /> 
              BBD Store'u Ziyaret Et
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Kategoriler Vitrini */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4 animate-fade-in">Kategorilerimiz</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-in">
            Motosikletiniz için ihtiyaç duyduğunuz tüm parça ve aksesuarlar BBD Store'da! Tüm kategorilerimize göz atın ve online mağazamızda alışveriş yapın.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a 
                key={category.id} 
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in"
              >
                {/* Kategori Görseli */}
                <div className="relative h-48 bg-gray-200 dark:bg-dark-700 overflow-hidden">
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="flex items-center">
                      <div className="mr-3 bg-primary-600 p-2 rounded-full">
                        {category.icon}
                      </div>
                      <h3 className="text-white font-bold text-lg">{category.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Kategori Bilgileri */}
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                  <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors font-medium">
                    Ürünleri Gör
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Servis Hizmetleri */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4 animate-fade-in">Bakım ve Servis Hizmetlerimiz</h2>
          <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in">
            BBD GARAGE'da motosikletiniz için profesyonel bakım ve onarım hizmetleri sunuyoruz. Uzman teknisyenlerimizle motosikletinizin performansını en üst seviyede tutuyoruz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <a 
                key={service.id} 
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group animate-fade-in"
              >
                <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors font-medium">
                  Detaylı Bilgi
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ana Mağaza CTA */}
      <section className="py-16 bg-white dark:bg-dark-900 text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg mb-6 animate-fade-in">BBD Store Online Mağazamız</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg animate-fade-in">
            Tüm motosiklet parçaları, aksesuarlar, bakım ürünleri ve daha fazlası için online mağazamızı ziyaret edin. En kaliteli markaların güvenilir ürünlerini uygun fiyatlarla bulabilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://bbdstore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <ShoppingCart size={18} /> 
              BBD Store'u Ziyaret Et
              <ExternalLink size={16} />
            </a>
            
            <a 
              href="tel:+905513451305" 
              className="btn-secondary flex items-center gap-2"
            >
              <Phone size={18} /> 
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 bg-green-500">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Yardıma mı ihtiyacınız var?</h2>
              <p className="mb-0">Ürünler hakkında soru sormak ve sipariş vermek için WhatsApp'tan bize ulaşın.</p>
            </div>
            <a 
              href="https://wa.me/905513451305?text=Merhaba%2C%20BBD%20Garage%20%C3%BCr%C3%BCnleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 bg-white text-green-500 hover:bg-green-50 py-3 px-8 rounded-md font-medium transition-colors"
            >
              Şimdi WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
