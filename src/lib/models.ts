import mongoose, { Schema } from 'mongoose';

// Embedded Question Schema (Succinct, no own collection)
const QuestionSchema = new Schema({
  soru_no: { type: Number, required: true },
  text: { type: String, required: true },
  options: {
    A: { type: String, required: true },
    B: { type: String, required: true },
    C: { type: String, required: true },
    D: { type: String, required: true },
    E: { type: String },
  },
  correctAnswer: { type: String, enum: ['A', 'B', 'C', 'D', 'E'], required: true },
  explanation: { type: String },
  topic: { type: String }, 
  source: { type: String },
});

// 1. Practice Exam Schema (Deneme)
const PracticeExamSchema = new Schema({
  title: { type: String, required: true }, 
  slug: { type: String, required: true, unique: true },
  examNumber: { type: Number, required: true }, 
  description: { type: String },
  duration: { type: Number, default: 120 }, 
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  questions: [QuestionSchema], 
  createdAt: { type: Date, default: Date.now },
});

// 2. Topic Test Schema removed
export const PracticeExam = mongoose.models.PracticeExam || mongoose.model('PracticeExam', PracticeExamSchema);

// Ensure we don't export Question or Exam anymore to avoid confusion
