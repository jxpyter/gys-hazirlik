import connectToDatabase from "@/lib/db";
import { PracticeExam } from "@/lib/models";
import { ExamRunner } from "@/components/exam/ExamRunner";
import { notFound } from "next/navigation";
import { ClientExam } from "@/types";

// Force dynamic because we are fetching specific ID
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Helper to serialize data
function serialize(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default async function ExamPage({ params }: PageProps) {
  await connectToDatabase();
  const { id } = await params;
  
  try {
    let exam = await PracticeExam.findById(id).populate('questions').lean();
    
    if (!exam) {
        notFound();
    }

    // Cast appropriately or perform runtime check
    const serializedExam = serialize(exam) as ClientExam;

    return (
      <div className="min-h-[80vh]">
        <ExamRunner exam={serializedExam} />
      </div>
    );
  } catch (error) {
    console.error("Exam fetch error:", error);
    return (
        <div className="text-center py-20 text-red-600">
            Sınav yüklenirken bir hata oluştu. Lütfen geçerli bir sınav ID'si kullandığınızdan emin olun.
        </div>
    );
  }
}
