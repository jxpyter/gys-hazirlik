import connectToDatabase from "@/lib/db";
import { PracticeExam } from "@/lib/models";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ClientExam } from "@/types";

// Force dynamic since DB can change
export const dynamic = 'force-dynamic';

async function getDenemeExams() {
  await connectToDatabase();
  // No type field in PracticeExam
  const exams = await PracticeExam.find({}).sort({ examNumber: 1 }).lean();
  return JSON.parse(JSON.stringify(exams)) as ClientExam[]; 
}

export default async function DenemeListPage() {
  const exams = await getDenemeExams();

  // Client-side sorting removed to respect examNumber ordering from DB



  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
         <Link href="/solve" className="text-sm text-slate-500 hover:text-slate-800 mb-4 block">← Geri Dön</Link>
         <h1 className="text-3xl font-bold text-slate-900">Deneme Sınavları</h1>
         <p className="text-slate-500 mt-2">Seviye seviye ayrılmış genel deneme sınavları.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <Card key={String(exam._id)} className="transition-all duration-300 hover:shadow-md border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{exam.title}</CardTitle>
                <CardDescription>{exam.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{exam.duration} Dk</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>{exam.questions.length} Soru</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                 <Link href={`/exam/${String(exam._id)}`} className="w-full">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                       Başla <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                 </Link>
              </CardFooter>
            </Card>
          ))}
          {exams.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-lg">
                Henüz deneme sınavı eklenmemiş.
            </div>
          )}
      </div>
    </div>
  );
}
