import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";
import { Phone, Calendar, Wrench, Settings, Award, Clock } from "lucide-react";

export const metadata = {
  title: "BBD GARAGE - Motosiklet Servisi",
  description: "Profesyonel motosiklet tamir servisi, motosiklet aksesuarları ve parçaları - EST. 2016",
};

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="BBD GARAGE - Motosiklet Servisi"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="container-custom mx-auto relative z-20 h-full flex flex-col justify-center items-start text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary-500">BBD GARAGE</span>
              <br />
              <span className="text-2xl md:text-3xl font-medium mt-2 block">Motosiklet Servisi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">Profesyonel Motosiklet Bakım ve Tamir Hizmetleri</p>
            <p className="text-lg text-gray-300 mb-8">2016&apos;dan beri güvenilir hizmet</p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/iletisim" className="btn-primary py-3 px-6 text-base">
                Randevu Al
              </Link>
              <a 
                href="https://wa.me/905513451305?text=Merhaba%2C%20BBD%20Garage%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                WhatsApp İletişim
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 z-10"></div>
      </section>

      {/* Hizmetlerimiz Özeti */}
      <section className="py-20 bg-light-gray dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Tüm motor bakım ve tamir ihtiyaçlarınız için profesyonel çözümler sunuyoruz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Motor Tamiri */}
            <div className="card hover:shadow-xl transition-shadow p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={32} className="text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Motor Tamiri</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Motor revizyonu, arıza teşhisi ve tamir hizmetleri.
              </p>
              <Link href="/hizmetlerimiz" className="text-primary-600 dark:text-primary-500 hover:underline font-medium">
                Detaylı Bilgi
              </Link>
            </div>
            
            {/* Periyodik Bakım */}
            <div className="card hover:shadow-xl transition-shadow p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32} className="text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Periyodik Bakım</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Yag, filtre ve genel bakım hizmetleri.
              </p>
              <Link href="/hizmetlerimiz" className="text-primary-600 dark:text-primary-500 hover:underline font-medium">
                Detaylı Bilgi
              </Link>
            </div>
            
            {/* Yedek Parça */}
            <div className="card hover:shadow-xl transition-shadow p-6 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32} className="text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yedek Parça</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Orijinal ve muadil motor parçaları.
              </p>
              <Link href="/magaza" className="text-primary-600 dark:text-primary-500 hover:underline font-medium">
                Detaylı Bilgi
              </Link>
            </div>
            
            {/* Motorsport */}
            <div className="card hover:shadow-xl transition-shadow p-6 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32} className="text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Motorsport</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Performans modifikasyonu ve yarış arabası bakımı.
              </p>
              <Link href="/hizmetlerimiz" className="text-primary-600 dark:text-primary-500 hover:underline font-medium">
                Detaylı Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden BBD GARAGE?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">2016&apos;dan beri kaliteli hizmet anlayışımızla müşterilerimize en iyi çözümleri sunuyoruz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deneyim */}
            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-primary-600 dark:text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deneyim</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  2016&apos;dan beri sektörde edindigimiz deneyim ile en zorlu motor problemlerini çözüyoruz.
                </p>
              </div>
            </div>
            
            {/* Uzman Kadro */}
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-primary-600 dark:text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Uzman Kadro</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Alanında uzman teknisyenlerimiz ile kaliteli hizmet garantisi.
                </p>
              </div>
            </div>
            
            {/* Kaliteli Parça */}
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings size={24} className="text-primary-600 dark:text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kaliteli Parça</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orijinal ve kaliteli yedek parçalarla uzun ömürlü çözümler.
                </p>
              </div>
            </div>
            
            {/* Uygun Fiyat */}
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-primary-600 dark:text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Uygun Fiyat</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Kaliteli hizmeti uygun fiyatlarla sunuyoruz.
                </p>
              </div>
            </div>
            
            {/* Garanti */}
            <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-primary-600 dark:text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Garanti</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tüm tamir ve bakım işlemlerimiz garantilidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Özeti */}
      <section className="py-20 bg-gray-100 dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Motor bakım ve tamir hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.  
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-600 dark:text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefon</h3>
                    <a href="tel:+905513451305" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                      +90 551 345 13 05
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-primary-600 dark:text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Adres</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Aydıntepe, 100. Yıl Cd. 43 B, 34947 Tuzla/İstanbul
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-600 dark:text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Çalışma Saatleri</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Pazartesi - Cumartesi: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/iletisim" className="btn-primary py-3 px-6">
                  İletişim Sayfası
                </Link>
              </div>
            </div>
            
            <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg animate-fade-in">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6279498969662!2d29.30107587525874!3d40.8690854713837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad91f36af0827%3A0x7a8345dfa5e6a3a9!2sAyd%C4%B1ntepe%2C%20100.%20Y%C4%B1l%20Cd.%20No%3A43%2C%2034947%20Tuzla%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1723212981374!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BBD GARAGE Konumu"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
