import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const questions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        id: 3,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Mars"
    },
    {
        id: 4,
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Leonardo da Vinci"
    },
    {
        id: 5,
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        id: 6,
        question: "Which country is famous for tulip fields?",
        options: ["Netherlands", "Italy", "France", "Turkey"],
        answer: "Netherlands"
    },
    {
        id: 7,
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Stephen King", "Harper Lee", "Jane Austen"],
        answer: "Harper Lee"
    },
    {
        id: 8,
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        answer: "Iron"
    },
    {
        id: 9,
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        id: 10,
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
        answer: "Alexander Graham Bell"
    }
];

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.post('/api/submit', (req, res) => {
    const { answers } = req.body;
    let score = 0;
    
    questions.forEach(question => {
        const questionId = question.id.toString(); 
        if (answers[questionId] === question.answer) {
            score++;
        }
    });

    res.json({ score });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
