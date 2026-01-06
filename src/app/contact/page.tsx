import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">İletişime Geçin</h1>
        <p className="text-xl text-slate-500">
          Proje hakkında sorularınız, iş birliği teklifleriniz veya geri bildirimleriniz için ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LinkedIn */}
        <Card className="hover:shadow-lg transition-all hover:border-blue-500">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4">
              <Linkedin className="w-6 h-6" />
            </div>
            <CardTitle>LinkedIn</CardTitle>
            <CardDescription>Profesyonel ağım üzerinden bağlantı kurun.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://www.linkedin.com/in/lxppyter/" target="_blank">
               <Button className="w-full bg-[#0077b5] hover:bg-[#006399]">
                 LinkedIn Profilim <ExternalLink className="ml-2 w-4 h-4" />
               </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upwork */}
        <Card className="hover:shadow-lg transition-all hover:border-green-500">
          <CardHeader>
             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-700 mb-4">
              <span className="font-bold text-xl">Up</span>
            </div>
            <CardTitle>Upwork</CardTitle>
            <CardDescription>Freelance projeleriniz için iş birliği yapalım.</CardDescription>
          </CardHeader>
          <CardContent>
             <Link href="https://www.upwork.com/freelancers/~01cb8d5ad5d6dc9571" target="_blank">
               <Button className="w-full bg-[#14a800] hover:bg-[#108a00]">
                 Upwork Profilim <ExternalLink className="ml-2 w-4 h-4" />
               </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

       <div className="mt-12 text-center">
            <p className="text-slate-500">Doğrudan e-posta göndermek isterseniz:</p>
            <Link href="mailto:jxpyter@gmail.com" className="text-blue-600 font-medium hover:underline text-lg mt-2 inline-block">
                jxpyter@gmail.com
            </Link>
       </div>
    </div>
  );
}
