'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll olduğunda butonu göster/gizle
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // İlk yükleme sonrası butonu göster (kısa bir gecikmeyle)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "905513451305";
    const message = "Merhaba, BBD Garage hizmetleri hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle size={28} />
        <span className="sr-only">WhatsApp</span>
      </button>
      <span className="absolute -top-10 right-0 bg-white dark:bg-dark-800 py-2 px-4 rounded-lg shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        WhatsApp ile İletişim
      </span>
    </div>
  );
}
