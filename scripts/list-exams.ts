import path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

async function listExams() {
    try {
        const { default: connectToDatabase } = await import('../src/lib/db');
        const { PracticeExam } = await import('../src/lib/models');
        await connectToDatabase();

        const exams = await PracticeExam.find({}, 'examNumber title description').sort({ examNumber: 1 });
        
        console.log('--- Current Exams ---');
        exams.forEach(e => {
            console.log(`Exam ${e.examNumber}: ${e.title}`);
            console.log(`Description: ${e.description}`);
            console.log('--------------------');
        });
        
        process.exit(0);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

listExams();
