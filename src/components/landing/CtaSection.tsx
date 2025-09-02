'use client';

import { Award, MessageCircle } from 'lucide-react';

export default function CtaSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561998166292', '_blank');
  };
  
  return (
    <div className="bg-gradient-to-br from-amber-700/80 to-amber-800/80 backdrop-blur-xl rounded-2xl p-8 text-center text-white shadow-xl border border-amber-600/20 mb-8 hover:from-amber-600/80 hover:to-amber-700/80 transition-all duration-500">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Award size={28} className="text-amber-200" />
        </div>
      </div>
      <h3 className="text-xl font-black mb-4 text-white">
        Pronto para realizar seu sonho?
      </h3>
      <p className="text-amber-100 font-medium mb-8 leading-relaxed text-sm">
        Entre em contato e descubra as melhores opções de financiamento para você
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="group bg-white hover:bg-slate-50 text-amber-800 font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-amber-200/20"
      >
        <span className="text-base">Consulta Gratuita</span>
        <MessageCircle size={18} className="inline ml-2 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
}