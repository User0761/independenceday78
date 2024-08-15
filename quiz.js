document.addEventListener('DOMContentLoaded', () => {
    const quizQuestions = [
        // Easy Questions
        { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi", difficulty: "easy" },
        { question: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh"], answer: "Mahatma Gandhi", difficulty: "easy" },
        // More easy questions
        { question: "What is the largest river in India?", options: ["Ganga", "Yamuna", "Godavari", "Indus"], answer: "Ganga", difficulty: "easy" },
        { question: "Which Indian state is known as the Land of the Rising Sun?", options: ["Arunachal Pradesh", "Assam", "Nagaland", "Meghalaya"], answer: "Arunachal Pradesh", difficulty: "easy" },

        // Medium Questions
        { question: "In which year did India gain independence?", options: ["1947", "1950", "1965", "1971"], answer: "1947", difficulty: "medium" },
        { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"], answer: "Dr. Rajendra Prasad", difficulty: "medium" },
        // More medium questions
        { question: "Which Indian leader gave the famous 'Tryst with Destiny' speech?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose"], answer: "Jawaharlal Nehru", difficulty: "medium" },
        { question: "What is the national currency of India?", options: ["Dollar", "Euro", "Yuan", "Rupee"], answer: "Rupee", difficulty: "medium" },

        // Hard Questions
        { question: "Which Indian leader was also a prominent lawyer and writer, known for his contribution to the Indian Constitution?", options: ["B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"], answer: "B.R. Ambedkar", difficulty: "hard" },
        { question: "What is the name of the Indian satellite launched in 2008 that made India the fourth country to reach the Moon?", options: ["Chandrayaan-1", "Mangalyaan", "INSAT-3DR", "GSAT-19"], answer: "Chandrayaan-1", difficulty: "hard" },
        // More hard questions
        { question: "Which Indian state has the highest literacy rate?", options: ["Kerala", "Goa", "Maharashtra", "Punjab"], answer: "Kerala", difficulty: "hard" },
        { question: "What was the name of the first nuclear test conducted by India in 1974?", options: ["Operation Shakti", "Operation Smiling Buddha", "Operation Thunderbolt", "Operation Valiant"], answer: "Operation Smiling Buddha", difficulty: "hard" }
    ];

    function generateQuiz() {
        const quizContainer = document.getElementById('quiz-questions');
        quizQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');
            questionDiv.innerHTML = `
                <h2>${index + 1}. ${q.question}</h2>
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    function calculateScore(event) {
        event.preventDefault();
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        const totalQuestions = quizQuestions.length;
        const resultDiv = document.getElementById('quiz-results');
        resultDiv.innerHTML = `<h2>Your Score: ${score} / ${totalQuestions}</h2>`;
    }

    generateQuiz();
    document.getElementById('quiz-form').addEventListener('submit', calculateScore);
});
