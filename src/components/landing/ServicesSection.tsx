export default function ServicesSection() {
  const services = [
    { name: 'Financiamento habitacional', colorFrom: 'from-blue-400', colorTo: 'to-blue-600' },
    { name: 'Refinanciamento de imóveis', colorFrom: 'from-amber-400', colorTo: 'to-amber-600' },
    { name: 'Consultoria financeira personalizada', colorFrom: 'from-purple-400', colorTo: 'to-purple-600' },
    { name: 'Análise de crédito imobiliário', colorFrom: 'from-emerald-400', colorTo: 'to-emerald-600' },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-white/10">
      <h3 className="text-xl font-black text-white mb-8 text-center">
        Serviços Especializados
      </h3>
      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className={`w-3 h-3 bg-gradient-to-br ${service.colorFrom} ${service.colorTo} rounded-full`}></div>
            <span className="text-white font-semibold">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}