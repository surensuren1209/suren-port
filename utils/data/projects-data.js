import Link from "next/link";

export const projectsData = [
    {
        id: 1,
        name: 'NOVA AI - PERSONAL AI',
        description: "NOVA AI is a personal AI assistant developed in Python that runs directly from the command prompt. It leverages the power of OpenAI’s API (or any NLP-based API) to provide intelligent, context-aware responses. It supports both text and optional voice interaction, making it suitable for productivity, code help, reminders, and day-to-day queries.",
        tools: ['Flask','OpenAI API','Gemini API','Groq API','LangChain','FAISS','Sentence Transformers','SpeechRecognition','pyttsx3','PyAudio','Pandas','NumPy','Schedule','Threading','Voice Assistant','JSON APIs','Task Scheduler'],
        role: 'Backend Developer',
        link:'https://github.com/surensuren1209/NOVA_AI_ChatBot',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'CALCULATOR-HTML',
        description: 'Smart Calculator is a responsive and interactive web application built using HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The design is minimal and mobile-friendly, with real-time input handling and error validation.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'DOM Manipulation', 'Event Handling'],
        role: ' Web Development',
        link:'https://github.com/surensuren1209/Web-Calculator',
        code: '',
        demo: '',
       
    },
    {
        id: 3,
        name: 'Local AI CPU',
        description: 'Built an offline AI chatbot application using Ollama and Mistral model running fully on CPU. Integrated with Python to enable local prompt-based communication and FastAPI for optional web API interaction. The project runs without cloud or internet dependency, enabling secure and private inference. Used local REST API to communicate with the Ollama backend and deployed the project for offline productivity and learning.',
        tools: ["Python","FastAPI","Ollama","Mistral","REST API","Requests","Uvicorn","JSON"],
        role: 'Full Stack Developer',
        code: '',
        link :'https://github.com/surensuren1209/CPU-LocalAI',
        demo: '',
    },
    {
        id: 4,
        name: 'QR CODE GENERATOR',
        description: 'This project showcases the development of a fully functional QR Code Generator web application, capable of generating QR codes for a wide range of data types including text, URL, phone number, email, contact details, SMS, and file links (PDF, images, etc.).The application is built using HTML, CSS (hacker-style animation), and JavaScript, and supports offline usage. It includes features such as custom color theming (green hacker UI), resizable QR output, copyright signature, and central QR preview. Designed with user-centric flexibility and real-world use in mind.',
        tools: ["HTML5","Js","Css","Animation/UI Style","GoQR",],
        role: 'Web Developer',
        code: '',
        link :'https://github.com/surensuren1209/QR_CODE_GENERATOR',
        demo: 'https://suren-qrgen.netlify.app/',
    },
    
];
