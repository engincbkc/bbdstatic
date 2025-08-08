'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hakkımızda */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">BBD GARAGE</h3>
            <p className="text-gray-600 dark:text-gray-400">
              2016&apos;dan beri motor tamiri ve motorsport alanında profesyonel hizmet veriyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                 aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                 aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                 aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Hızlı Linkler</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Hakkımızda
              </Link>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Hizmetlerimiz
              </Link>
              <Link href="/magaza" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Mağaza
              </Link>
              <Link href="/iletisim" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Hizmetlerimiz */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Hizmetlerimiz</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Motor Tamiri
              </Link>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Periyodik Bakım
              </Link>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Motor Yedek Parçaları
              </Link>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Motor Aksesuarları
              </Link>
              <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                Motorsport Hizmetleri
              </Link>
            </nav>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-500 mt-0.5 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Aydıntepe, 100. Yıl Cd. 43 B, 34947 Tuzla/İstanbul
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-500 mr-2" />
                <a href="tel:+905513451305" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                  +90 551 345 13 05
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-500 mr-2" />
                <a href="mailto:info@bbdgarage.com" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                  info@bbdgarage.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary-600 dark:text-primary-500 mr-2" />
                <p className="text-gray-600 dark:text-gray-400">
                  Pzt-Cmt: 09:00-18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} BBD GARAGE. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
