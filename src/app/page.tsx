import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[85vh]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center space-y-10 py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-white">
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="hero-badge">
            <Badge variant="secondary" className="px-5 py-2 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/50 shadow-sm">
              %100 Ücretsiz GYS Platformu
            </Badge>
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            En İyi Hazırlık, <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Gerçekçi Denemelerle Başlar.</span>
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            GYS şube müdürlüğü sınavına tam hazırlık: 16 deneme, 960 özgün soru. %100 ücretsiz.
          </p>

          <div className="pt-8 hero-cta">
            <Link href="/solve/deneme">
              <button className="group relative h-16 px-12 text-xl font-semibold bg-slate-900 text-slate-50 shadow-xl hover:shadow-2xl transition-shadow -skew-x-12 rounded-none overflow-hidden border-0 cursor-pointer">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70 -translate-x-full group-hover:translate-x-full transition-all duration-500 ease-out" />
                <span className="relative flex items-center skew-x-12">
                   SORU ÇÖZ
                   <ArrowRight className="ml-3 w-6 h-6" />
                </span>
              </button>
            </Link>
          </div>
        </div>

      </section>

      {/* Kimler İçin? */}
      <section className="features-section bg-white py-24 border-t border-slate-200/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Bu Platform Kimler İçin?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Milli Eğitim Bakanlığı Şube Müdürlüğü sınavına hazırlanan eğitimciler için özel olarak tasarlandı.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card bg-slate-50/50 p-8 rounded-2xl border border-slate-200/60 hover:border-blue-300/60 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-700 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Hedefe Odaklananlar</h3>
              <p className="text-slate-600 leading-relaxed">
                Gereksiz detaylarda boğulmadan, doğrudan sınav müfredatına uygun sorularla çalışmak isteyenler.
              </p>
            </div>

            <div className="feature-card bg-slate-50/50 p-8 rounded-2xl border border-slate-200/60 hover:border-teal-300/60 hover:shadow-lg transition-all duration-300 group">
               <div className="bg-gradient-to-br from-teal-100 to-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-teal-700 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Kendini Denemek İsteyenler</h3>
              <p className="text-slate-600 leading-relaxed">
                Süre tutarak gerçek sınav provası yapmak ve anlık geri bildirimlerle durumunu görmek isteyenler.
              </p>
            </div>

            <div className="feature-card bg-slate-50/50 p-8 rounded-2xl border border-slate-200/60 hover:border-indigo-300/60 hover:shadow-lg transition-all duration-300 group">
               <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-indigo-700 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Profesyonel Hazırlık</h3>
              <p className="text-slate-600 leading-relaxed">
                Kurumsal ciddiyetle hazırlanmış, sade ve dikkat dağıtmayan bir arayüzde çalışmak isteyenler.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
