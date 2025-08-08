'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'İletişim | BBD GARAGE - Mechanic & MotorSport',
  description: 'BBD GARAGE ile iletişime geçin. Adres, telefon, e-posta ve çalışma saatleri bilgileri.',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen tüm zorunlu alanları doldurun.',
      });
      return;
    }
    
    // Mock form submission - in real application would send to server
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
    }, 5000);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="BBD GARAGE İletişim"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="container-custom mx-auto relative z-20 h-full flex flex-col justify-center items-start text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
            <p className="text-xl text-gray-200">
              Bizimle iletişime geçin, sorularınızı yanıtlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Randevu almak, bilgi edinmek veya herhangi bir konuda destek için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hafta içi 09:00 - 18:00 arası açık</p>
                    <a 
                      href="tel:+905513451305" 
                      className="text-primary-600 dark:text-primary-500 hover:underline font-medium"
                    >
                      +90 (551) 345 13 05
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">E-posta</h3>
                    <p className="text-gray-600 dark:text-gray-400">Sorularınız için bize e-posta gönderin</p>
                    <a 
                      href="mailto:info@bbdgarage.com" 
                      className="text-primary-600 dark:text-primary-500 hover:underline font-medium"
                    >
                      info@bbdgarage.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Adres</h3>
                    <p className="text-gray-600 dark:text-gray-400">Servisimizi ziyaret edin</p>
                    <address className="not-italic text-gray-700 dark:text-gray-300">
                      Bahçelievler Mahallesi, Yavuz Selim Caddesi, No: 17/A<br />
                      Bahçelievler, İstanbul, Türkiye
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Çalışma Saatleri</h3>
                    <ul className="text-gray-700 dark:text-gray-300">
                      <li className="flex justify-between">
                        <span>Pazartesi - Cuma:</span>
                        <span>09:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Cumartesi:</span>
                        <span>10:00 - 16:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pazar:</span>
                        <span>Kapalı</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Sosyal Medya */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-3">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/bbdgarage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://facebook.com/bbdgarage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://youtube.com/bbdgarage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* İletişim Formu */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold mb-6">Bize Mesaj Gönderin</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      İsim Soyisim*
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      E-posta*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Konu*
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100"
                      required
                    >
                      <option value="">Konu Seçin</option>
                      <option value="Servis Randevusu">Servis Randevusu</option>
                      <option value="Parça Bilgisi">Parça Bilgisi</option>
                      <option value="Fiyat Bilgisi">Fiyat Bilgisi</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Mesajınız*
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 resize-none"
                    required
                  ></textarea>
                </div>
                
                {formStatus.submitted && (
                  <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-md font-medium transition-colors flex items-center gap-2"
                  >
                    <Send size={18} /> 
                    Mesaj Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-light-gray dark:bg-dark-800">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bizi Ziyaret Edin</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Servisimizin konumunu aşağıdaki haritada görebilirsiniz.
            </p>
          </div>
          
          <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg animate-fade-in">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900905247!2d28.884622215055852!3d40.99740192855259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77ed2d26c73%3A0x26fe4d8535031b36!2sBah%C3%A7elievler%2C%20Istanbul!5e0!3m2!1sen!2str!4v1623785912345!5m2!1sen!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="BBD GARAGE Konum"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Call to Action - WhatsApp */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Hızlı İletişim</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Acil durumlarda veya hızlı bilgi almak için WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
          <div className="animate-fade-in">
            <a 
              href="https://wa.me/905513451305?text=Merhaba%2C%20BBD%20Garage%20ile%20ileti%C5%9Fime%20ge%C3%A7mek%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
