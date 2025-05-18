export const quizzes = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your general knowledge across various subjects.",
    difficulty: "Easy",
    tags: ["general knowledge", "trivia"],
    questions: [
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Mars", "Earth", "Jupiter", "Saturn"],
      "correctAnswer": "Jupiter",
      "difficulty": "easy",
      "explanation": "Jupiter is a gas giant and significantly larger than any other planet in our solar system."
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O2", "CO2", "H2O", "NaCl"],
      "correctAnswer": "H2O",
      "difficulty": "easy",
      "explanation": "H2O represents two hydrogen atoms and one oxygen atom, the components of water."
    },
    {
      "question": "Which country gifted the Statue of Liberty to the United States?",
      "options": ["England", "Germany", "France", "Italy"],
      "correctAnswer": "France",
      "difficulty": "easy",
      "explanation": "France gifted the Statue of Liberty as a symbol of friendship between the two nations."
    },
    {
      "question": "What is the capital of Australia?",
      "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
      "correctAnswer": "Canberra",
      "difficulty": "easy",
      "explanation": "Canberra is the purpose-built capital city of Australia."
    },
    {
      "question": "Which gas do plants primarily absorb from the atmosphere?",
      "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      "correctAnswer": "Carbon Dioxide",
      "difficulty": "easy",
      "explanation": "Plants use carbon dioxide during photosynthesis to produce energy."
    },
    {
      "question": "What is the most likely meaning of the word 'test' in a general knowledge context?",
      "options": ["A trial or examination.", "A testament or will.", "A rigorous experiment.", "A comprehensive assessment."],
      "correctAnswer": "A trial or examination.",
      "difficulty": "medium",
      "explanation": "In general usage, 'test' most commonly refers to an assessment or trial to evaluate knowledge or ability."
    },
    {
      "question": "If 'test' is used as a verb, what action does it typically describe?",
      "options": ["To evaluate something.", "To prove something.", "To challenge something.", "To examine something."],
      "correctAnswer": "To evaluate something.",
      "difficulty": "medium",
      "explanation": "The verb 'to test' implies an evaluation or assessment of something."
    },
    {
      "question": "How might the word 'test' be used in a scientific context?",
      "options": ["To describe a hypothesis.", "To describe a controlled experiment.", "To describe a conclusion.", "To describe a theory."],
      "correctAnswer": "To describe a controlled experiment.",
      "difficulty": "medium",
      "explanation": "In science, a 'test' often refers to a controlled experiment designed to verify a hypothesis."
    },
    {
      "question": "What is a synonym for 'test' that emphasizes the process of evaluation?",
      "options": ["Trial", "Assessment", "Experiment", "Examination"],
      "correctAnswer": "Assessment",
      "difficulty": "medium",
      "explanation": "'Assessment' directly implies a systematic evaluation."
    },
    {
      "question": "If someone says they are 'testing the waters,' what do they mean?",
      "options": ["They are literally testing the temperature of water.", "They are cautiously exploring a new situation.", "They are conducting a scientific experiment.", "They are taking a swimming test."],
      "correctAnswer": "They are cautiously exploring a new situation.",
      "difficulty": "medium",
      "explanation": "This is an idiom meaning to carefully explore a new situation before committing fully."
    },
    {
      "question": "Which philosophical concept posits that our understanding of reality is shaped by our inherent biases and perspectives?",
      "options": ["Nihilism", "Existentialism", "Social Constructivism", "Stoicism"],
      "correctAnswer": "Social Constructivism",
      "difficulty": "hard",
      "explanation": "Social constructivism argues that reality is not inherent but is socially constructed through shared meanings and interactions."
    },
    {
      "question": "The 'butterfly effect' is a concept primarily associated with which scientific field?",
      "options": ["Quantum Physics", "Chaos Theory", "Evolutionary Biology", "Cosmology"],
      "correctAnswer": "Chaos Theory",
      "difficulty": "hard",
      "explanation": "The butterfly effect illustrates the sensitive dependence on initial conditions within chaos theory."
    },
    {
      "question": "What is the primary function of the cerebellum in the human brain?",
      "options": ["Higher-level cognitive functions", "Emotional regulation", "Motor control and coordination", "Language processing"],
      "correctAnswer": "Motor control and coordination",
      "difficulty": "hard",
      "explanation": "The cerebellum plays a crucial role in coordinating movement, balance, and posture."
    },
    {
      "question": "What is the significance of the 'Cambrian explosion' in the history of life on Earth?",
      "options": ["The emergence of the first single-celled organisms", "A rapid diversification of animal life forms", "The extinction of the dinosaurs", "The formation of the Earth's atmosphere"],
      "correctAnswer": "A rapid diversification of animal life forms",
      "difficulty": "hard",
      "explanation": "The Cambrian explosion saw a sudden increase in the diversity and complexity of animal life."
    },
    {
      "question": "What significant geopolitical event marked the end of the Cold War?",
      "options": ["The Cuban Missile Crisis", "The Korean War", "The collapse of the Soviet Union", "The Vietnam War"],
      "correctAnswer": "The collapse of the Soviet Union",
      "difficulty": "hard",
      "explanation": "The dissolution of the Soviet Union in 1991 is widely considered the end of the Cold War."
    }
    ]
  },
  // {
  //   id: 2,
  //   title: "HTML & CSS Fundamentals",
  //   description: "Check your knowledge of web design using HTML and CSS.",
  //   difficulty: "Beginner",
  //   tags: ["html", "css", "frontend"],
  //   questions: [
  //     {
  //       id: 201,
  //       question: "Which HTML tag is used to define an unordered list?",
  //       options: ["<ol>", "<ul>", "<li>", "<list>"],
  //       correctAnswer: "<ul>"
  //     },
  //     {
  //       id: 202,
  //       question: "Which CSS property controls the text size?",
  //       options: ["font-style", "text-size", "font-size", "text-style"],
  //       correctAnswer: "font-size"
  //     },
  //     {
  //       id: 203,
  //       question: "How do you select an element with id 'header' in CSS?",
  //       options: ["#header", ".header", "header", "*header"],
  //       correctAnswer: "#header"
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "React JS Concepts",
  //   description: "Challenge your understanding of core React concepts and hooks.",
  //   difficulty: "Intermediate",
  //   tags: ["react", "hooks", "javascript", "frontend"],
  //   questions: [
  //     {
  //       id: 301,
  //       question: "Which hook is used to manage state in a functional component?",
  //       options: ["useRef", "useEffect", "useState", "useContext"],
  //       correctAnswer: "useState"
  //     },
  //     {
  //       id: 302,
  //       question: "What is the default behavior of `useEffect`?",
  //       options: [
  //         "Runs after every render",
  //         "Runs only on mount",
  //         "Runs before render",
  //         "Runs only when state updates"
  //       ],
  //       correctAnswer: "Runs after every render"
  //     },
  //     {
  //       id: 303,
  //       question: "Keys in React lists help with what?",
  //       options: [
  //         "Styling",
  //         "Improving performance",
  //         "Tracking element identity",
  //         "None of the above"
  //       ],
  //       correctAnswer: "Tracking element identity"
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Node.js & Express",
  //   description: "Test your backend knowledge using Node.js and Express framework.",
  //   difficulty: "Intermediate",
  //   tags: ["node", "express", "backend", "javascript"],
  //   questions: [
  //     {
  //       id: 401,
  //       question: "Which method is used to create a server in Node.js?",
  //       options: ["http.listen()", "http.createServer()", "server.start()", "express.init()"],
  //       correctAnswer: "http.createServer()"
  //     },
  //     {
  //       id: 402,
  //       question: "Which middleware is used to parse JSON bodies in Express?",
  //       options: ["bodyParser.json()", "express.json()", "jsonParser()", "express.body()"],
  //       correctAnswer: "express.json()"
  //     },
  //     {
  //       id: 403,
  //       question: "What does `req.params` contain in Express?",
  //       options: [
  //         "Query string parameters",
  //         "Form data",
  //         "URL route parameters",
  //         "Header information"
  //       ],
  //       correctAnswer: "URL route parameters"
  //     }
  //   ]
  // }
];
