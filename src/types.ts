export interface ClientQuestion {
  _id: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation?: string;
  source?: string;
  topic: string;
}

export interface ClientExam {
  _id: string;
  title: string;
  duration: number;
  questions: ClientQuestion[];
  // type is no longer stored in DB, but we might want it for UI logic.
  // For now, let's make it optional or derive it.
  type?: 'Deneme' | 'Konu'; 
  topic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  description?: string;
  slug?: string;
}
