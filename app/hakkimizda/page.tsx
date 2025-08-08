import Image from 'next/image';
import MainLayout from '../../components/layout/MainLayout';
import { User, Clock, Award, Target } from 'lucide-react';

export const metadata = {
  title: 'Hakkımızda | BBD GARAGE - Mechanic & MotorSport',
  description: 'BBD GARAGE - 2016\'dan beri motor tamir ve motorsport hizmetleri sunan ekibimiz hakkında bilgi alın.',
};

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="BBD GARAGE Hakkında"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="container-custom mx-auto relative z-20 h-full flex flex-col justify-center items-start text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl text-gray-200">
              2016'dan beri motor tamir ve motorsport sektöründe hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                BBD GARAGE, 2016 yılında motor tamiri ve bakımı konusunda uzmanlaşmış bir ekip olarak kuruldu. Tuzla bölgesinin motorsport tutkunları için güvenilir bir adres olmayı hedefledik.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Yıllar içinde kadromuzu genişleterek ve teknik bilgimizi geliştirerek, sadece tamir hizmetleri değil, aynı zamanda motorsport alanında da uzmanlaştık. Müşterilerimize her zaman en kaliteli hizmeti sunmak için sürekli kendimizi geliştiriyoruz.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Bugün, BBD GARAGE olarak hem bireysel motor sahipleri hem de yarış takımları için tercih edilen bir servis merkezi konumundayız.
              </p>
            </div>
            
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <Image
                src="/images/about-story.jpg"
                alt="BBD GARAGE Hikayesi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-light-gray dark:bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              BBD GARAGE olarak, müşterilerimize hizmet verirken temel değerlerimizden asla ödün vermiyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kalite */}
            <div className="card p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kalite</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Her işimizde en yüksek kalite standartlarını hedefliyoruz. Kullandığımız parçalar, yaptığımız işçilik ve sunduğumuz hizmet ile kaliteyi garanti ediyoruz.
              </p>
            </div>
            
            {/* Güven */}
            <div className="card p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Güven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Müşterilerimizle kurduğumuz güven ilişkisi, işimizin temelini oluşturur. Şeffaf fiyatlandırma ve dürüst iş anlayışımızla güveninizi kazanıyoruz.
              </p>
            </div>
            
            {/* Hız */}
            <div className="card p-6 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hız</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Zamanın değerli olduğunu biliyoruz. Bu nedenle, işlerimizi mümkün olan en hızlı şekilde, kaliteden ödün vermeden tamamlıyoruz.
              </p>
            </div>
            
            {/* Uzmanlık */}
            <div className="card p-6 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Uzmanlık</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ekibimiz, motor tamiri ve motorsport konusunda uzun yılların deneyimine sahip uzmanlardan oluşuyor. Bu uzmanlığımızı her işimize yansıtıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ekibimiz</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              BBD GARAGE'ın başarısının arkasında, alanında uzman ve tutkulu bir ekip var.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ekip Üyesi 1 */}
            <div className="group animate-fade-in">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md mb-4">
                <Image
                  src="/images/team-1.jpg"
                  alt="Ahmet Yılmaz - Kurucu ve Baş Teknisyen"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Ahmet Yılmaz</h3>
              <p className="text-primary-600 dark:text-primary-500 font-medium">Kurucu ve Baş Teknisyen</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                15+ yıllık motor tamir tecrübesi ile sektörün önde gelen uzmanlarından.
              </p>
            </div>
            
            {/* Ekip Üyesi 2 */}
            <div className="group animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md mb-4">
                <Image
                  src="/images/team-2.jpg"
                  alt="Mehmet Demir - Motorsport Uzmanı"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Mehmet Demir</h3>
              <p className="text-primary-600 dark:text-primary-500 font-medium">Motorsport Uzmanı</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Yarış motoru modifikasyonları ve performans artırma konusunda uzman.
              </p>
            </div>
            
            {/* Ekip Üyesi 3 */}
            <div className="group animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md mb-4">
                <Image
                  src="/images/team-3.jpg"
                  alt="Ayşe Kaya - Müşteri İlişkileri"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Ayşe Kaya</h3>
              <p className="text-primary-600 dark:text-primary-500 font-medium">Müşteri İlişkileri</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Müşteri memnuniyeti odaklı yaklaşımı ile servis deneyimini üst düzeye taşıyor.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* İstatistikler */}
      <section className="py-16 bg-primary-600 dark:bg-primary-900 text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">2016</div>
              <p className="text-gray-200 font-medium">Kuruluş Yılı</p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <p className="text-gray-200 font-medium">Tamamlanan Servis</p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-gray-200 font-medium">Uzman Teknisyen</p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-gray-200 font-medium">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
