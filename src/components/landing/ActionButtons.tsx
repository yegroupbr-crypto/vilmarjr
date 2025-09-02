'use client';

import { MessageCircle, Instagram, Globe } from 'lucide-react';

export default function ActionButtons() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561998166292', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/juniorgualbertto_', '_blank');
  };

  const handleWebsiteClick = () => {
    alert('Site em breve!');
  };

  return (
    <div className="space-y-4 mb-16">
      <button
        onClick={handleWhatsAppClick}
        className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-emerald-500/20"
      >
        <div className="flex items-center gap-4">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="text-left">
            <div className="text-lg font-bold">WhatsApp</div>
            <div className="text-sm opacity-90 font-medium">+55 61 99816-6292</div>
          </div>
        </div>
        <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
      </button>

      <button
        onClick={handleInstagramClick}
        className="group w-full bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-purple-500/20"
      >
        <div className="flex items-center gap-4">
          <Instagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="text-left">
            <div className="text-lg font-bold">Instagram</div>
            <div className="text-sm opacity-90 font-medium">@juniorgualbertto_</div>
          </div>
        </div>
        <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
      </button>

      <button
        onClick={handleWebsiteClick}
        className="group w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-blue-500/20"
      >
        <div className="flex items-center gap-4">
          <Globe size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="text-left">
            <div className="text-lg font-bold">Website</div>
            <div className="text-sm opacity-90 font-medium">Em breve</div>
          </div>
        </div>
        <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
      </button>
    </div>
  );
}