import Image from 'next/image';
import MainLayout from '../../components/layout/MainLayout';
import { Wrench, BarChart, Settings, FileCheck, Shield, Phone } from 'lucide-react';

export const metadata = {
  title: 'Hizmetlerimiz | BBD GARAGE - Mechanic & MotorSport',
  description: 'BBD GARAGE tarafından sunulan profesyonel motor tamir ve motorsport hizmetleri hakkında bilgi alın.',
};

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="BBD GARAGE Hizmetleri"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="container-custom mx-auto relative z-20 h-full flex flex-col justify-center items-start text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-200">
              Motor tamir ve bakım işlemlerinde profesyonel çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Ana Hizmetler */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sunduğumuz Hizmetler</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Motor bakım, onarım ve performans artırma alanlarında kapsamlı hizmetler sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Motor Tamiri */}
            <div className="card p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Motor Tamiri</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tüm motor arızalarının tespiti ve onarımı için uzman ekibimizle hizmetinizdeyiz. Yağ kaçağı, hararet, performans kaybı ve diğer sorunlarda çözüm sunuyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Motor revizyonu
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Arıza tespiti
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Parça değişimi
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Motor ayarları
                </li>
              </ul>
            </div>
            
            {/* Periyodik Bakım */}
            <div className="card p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-7 h-7 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Periyodik Bakım</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Motorunuzun ömrünü uzatmak ve performansını korumak için düzenli bakım hizmetleri sunuyoruz. Zamanında yapılan bakımlarla büyük arızaların önüne geçiyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Yağ ve filtre değişimi
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Genel kontroller
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Sıvı seviyeleri kontrolü
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Mevsimsel bakım
                </li>
              </ul>
            </div>
            
            {/* Motorsport Hizmetleri */}
            <div className="card p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-7 h-7 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Motorsport Hizmetleri</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Yarış ve performans tutkunları için özel çözümler. Motorunuzdan maksimum performansı almanız için gerekli modifikasyonları yapıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Performans artırma
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Yarış motorları
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  ECU ayarları
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Yarış öncesi kontroller
                </li>
              </ul>
            </div>
            
            {/* Motor Yedek Parçaları */}
            <div className="card p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Motor Yedek Parçaları</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Orijinal ve kaliteli muadil motor parçaları tedarik ediyoruz. Geniş stok yelpazemizle ihtiyacınız olan parçalara hızlıca ulaşmanızı sağlıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Orijinal parçalar
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Kaliteli muadiller
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Hızlı tedarik
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Parça garantisi
                </li>
              </ul>
            </div>
            
            {/* Motor Aksesuarları */}
            <div className="card p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Motor Aksesuarları</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Motorunuzun görünümünü ve kullanım konforunu artıracak aksesuarlar için doğru adres. Kaliteli ve şık aksesuarlarımızla motorunuzu kişiselleştirin.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Koruma ekipmanları
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Görünüm parçaları
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Konfor ekipmanları
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Montaj hizmetleri
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servis Süreci */}
      <section className="py-16 bg-light-gray dark:bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Servis Sürecimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              BBD GARAGE'da servis süreciniz şeffaf ve düzenli bir şekilde ilerliyor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Adım 1 */}
            <div className="relative animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="h-1 bg-primary-600 flex-grow ml-4 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Randevu & Tespit</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Randevu alın ve motorunuzu servise getirin. Uzman teknisyenlerimiz detaylı bir kontrol yaparak sorunları tespit eder.
              </p>
            </div>
            
            {/* Adım 2 */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="h-1 bg-primary-600 flex-grow ml-4 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Fiyat Teklifi</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tespit edilen sorunlar ve gerekli işlemler için detaylı ve şeffaf bir fiyat teklifi sunulur. İşleme onayınızla devam edilir.
              </p>
            </div>
            
            {/* Adım 3 */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="h-1 bg-primary-600 flex-grow ml-4 hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Servis & Tamir</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Onayınız sonrası uzman ekibimiz gerekli tamir ve bakım işlemlerini profesyonel bir şekilde gerçekleştirir.
              </p>
            </div>
            
            {/* Adım 4 */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Teslim & Takip</h3>
              <p className="text-gray-600 dark:text-gray-400">
                İşlemler tamamlandıktan sonra motorunuz test edilir ve size teslim edilir. Servis sonrası takip hizmetiyle memnuniyetiniz garantilenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanti & Fiyatlandırma */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Garanti */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Garanti Hizmetimiz</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                BBD GARAGE olarak, yaptığımız tüm işlerde ve sattığımız tüm parçalarda müşteri memnuniyetini ön planda tutuyoruz. Bu nedenle, servis hizmetlerimiz ve parçalar için kapsamlı garanti sunuyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">İşçilik Garantisi</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tüm tamir ve bakım işlemlerimiz 3 ay işçilik garantisi kapsamındadır.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">Parça Garantisi</h3>
                    <p className="text-gray-600 dark:text-gray-400">Kullandığımız tüm parçalar üretici firma garantisi altındadır.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">Memnuniyet Garantisi</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hizmetlerimizden memnun kalmazsanız, sorunu ücretsiz olarak çözmeyi taahhüt ediyoruz.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Fiyatlandırma */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h2 className="text-3xl font-bold mb-6">Fiyatlandırma Politikamız</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                BBD GARAGE'da fiyatlandırma konusunda şeffaf ve adil bir politika izliyoruz. Müşterilerimize her zaman rekabetçi ve uygun fiyatlar sunmaya çalışıyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">Şeffaf Fiyatlandırma</h3>
                    <p className="text-gray-600 dark:text-gray-400">Her işlem öncesi detaylı ve net fiyat teklifi sunuyoruz, ek maliyetler çıkmaz.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">Esnek Ödeme Seçenekleri</h3>
                    <p className="text-gray-600 dark:text-gray-400">Nakit, kredi kartı ve taksit seçenekleriyle ödeme kolaylığı sağlıyoruz.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold mt-0.5 mr-3">✓</span>
                  <div>
                    <h3 className="font-bold">Kampanyalar</h3>
                    <p className="text-gray-600 dark:text-gray-400">Düzenli olarak özel indirim ve kampanyalar düzenliyoruz. Takipte kalın!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 dark:bg-primary-900 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Profesyonel Motor Hizmetleri İçin</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 animate-fade-in">
            Motorunuzun bakımı ve tamiri için hemen randevu alın!
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <a 
              href="tel:+905513451305" 
              className="bg-white text-primary-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Phone size={18} /> 
              Hemen Ara
            </a>
            <a 
              href="https://wa.me/905513451305?text=Merhaba%2C%20BBD%20Garage%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
