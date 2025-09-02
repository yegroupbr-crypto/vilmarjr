import { Briefcase } from 'lucide-react';

interface ProfileSectionProps {
  name: string;
  initials: string;
  title: string;
  description: string;
}

export default function ProfileSection({ name, initials, title, description }: ProfileSectionProps) {
  return (
    <div className="text-center mb-16">
      <div className="relative inline-block mb-10">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-800 via-slate-800 to-amber-800 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm">
          <span className="text-4xl font-black text-white tracking-tight">{initials}</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl border-2 border-slate-900 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      
      <h1 className="text-3xl font-black text-white mb-4 tracking-tight">
        {name}
      </h1>
      <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 mb-8">
        <Briefcase size={18} className="text-amber-400" />
        <p className="text-base font-semibold text-slate-200">
          {title}
        </p>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed px-2 font-medium max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
