export const quizzes = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your general knowledge across various subjects.",
    difficulty: "Easy",
    tags: ["general knowledge", "trivia"],
    img : "/assets/quiz/gk.svg",
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
 {
    id: 2,
    title: "Web Development Concepts",
    description: "Test your understanding of foundational, intermediate, and advanced web development concepts.",
    difficulty: "Easy",
    tags: ["html", "css", "javascript", "frontend"],
    img : "/assets/quiz/web.svg",
    questions: [
    {
      "difficulty": "easy",
      "question": "What is the primary purpose of HTML in web development?",
      "options": [
        "To add styling and visual appeal to a website.",
        "To handle the logic and functionality of a website.",
        "To structure and organize the content of a website.",
        "To manage the database and server-side operations."
      ],
      "answer": "To structure and organize the content of a website.",
      "explanation": "HTML (HyperText Markup Language) provides the basic structure and semantic meaning of web pages. It uses tags to define elements like headings, paragraphs, images, and links."
    },
    {
      "difficulty": "easy",
      "question": "Which of the following best describes the role of CSS in web development?",
      "options": [
        "To define the behavior and interactivity of web pages.",
        "To manage the data storage and retrieval for a website.",
        "To control the visual presentation and layout of a website.",
        "To handle the communication between the client and server."
      ],
      "answer": "To control the visual presentation and layout of a website.",
      "explanation": "CSS (Cascading Style Sheets) is used to style HTML elements, controlling aspects like colors, fonts, spacing, and layout."
    },
    {
      "difficulty": "easy",
      "question": "What is the main function of JavaScript in web development?",
      "options": [
        "To create the visual structure of a webpage.",
        "To store and manage website data.",
        "To add interactivity and dynamic behavior to web pages.",
        "To define the semantic meaning of web page content."
      ],
      "answer": "To add interactivity and dynamic behavior to web pages.",
      "explanation": "JavaScript enables dynamic behavior on websites, allowing for things like animations, form validation, and user interactions."
    },
    {
      "difficulty": "easy",
      "question": "Why is responsive web design important?",
      "options": [
        "To make websites look visually appealing on large screens only.",
        "To ensure websites function correctly only on specific browsers.",
        "To optimize websites for different screen sizes and devices.",
        "To improve website loading speed on high-speed internet connections only."
      ],
      "answer": "To optimize websites for different screen sizes and devices.",
      "explanation": "Responsive design ensures websites adapt to various screen sizes (desktops, tablets, smartphones), providing a consistent user experience across devices."
    },
    {
      "difficulty": "easy",
      "question": "What is the significance of using semantic HTML tags?",
      "options": [
        "They make websites look more visually appealing.",
        "They improve website loading speed.",
        "They enhance website accessibility and SEO.",
        "They are only necessary for complex websites."
      ],
      "answer": "They enhance website accessibility and SEO.",
      "explanation": "Semantic HTML uses tags that clearly describe the meaning and purpose of content, improving accessibility for users with disabilities and search engine optimization (SEO)."
    },
    {
      "difficulty": "medium",
      "question": "Which of the following best describes the fundamental purpose of a web server?",
      "options": [
        "To display web pages directly to users' browsers.",
        "To store and manage website files.",
        "To interpret and execute client-side scripts.",
        "To process user requests and deliver appropriate web resources."
      ],
      "answer": "To process user requests and deliver appropriate web resources.",
      "explanation": "A web server's primary function is to receive requests from clients (browsers) and respond by sending the requested resources (HTML, CSS, JavaScript, images, etc.)."
    },
    {
      "difficulty": "medium",
      "question": "What is the primary difference between client-side and server-side scripting?",
      "options": [
        "Client-side scripts are executed on the server, while server-side scripts are executed on the client.",
        "Client-side scripts handle user interface interactions, while server-side scripts manage data and logic.",
        "Client-side scripts are written in JavaScript, while server-side scripts are written in Python.",
        "Client-side scripts are more secure than server-side scripts."
      ],
      "answer": "Client-side scripts handle user interface interactions, while server-side scripts manage data and logic.",
      "explanation": "Client-side scripting (like JavaScript) focuses on enhancing the user interface and experience within the browser. Server-side scripting (like Python, PHP, Node.js) handles data processing and logic."
    },
    {
      "difficulty": "medium",
      "question": "Consider the importance of responsive web design. Why is it crucial for modern websites?",
      "options": [
        "It improves website loading speed.",
        "It enhances the visual appeal of the website.",
        "It ensures optimal viewing experience across various devices.",
        "It simplifies website maintenance."
      ],
      "answer": "It ensures optimal viewing experience across various devices.",
      "explanation": "Responsive design adapts the website's layout to different screen sizes (desktops, tablets, smartphones), providing a consistent and user-friendly experience."
    },
    {
      "difficulty": "medium",
      "question": "How does the concept of RESTful APIs contribute to modern web development?",
      "options": [
        "It simplifies database management.",
        "It facilitates communication between different software systems.",
        "It improves website security.",
        "It enhances user interface design."
      ],
      "answer": "It facilitates communication between different software systems.",
      "explanation": "RESTful APIs provide a standardized way for different systems (e.g., mobile apps and web servers) to communicate and exchange data efficiently."
    },
    {
      "difficulty": "medium",
      "question": "What is the significance of version control systems (like Git) in collaborative web development?",
      "options": [
        "They improve website performance.",
        "They enhance website security.",
        "They enable efficient code management and collaboration among developers.",
        "They simplify the deployment process."
      ],
      "answer": "They enable efficient code management and collaboration among developers.",
      "explanation": "Version control systems like Git track changes, allow collaboration, and support branching and merging, making them essential for team-based projects."
    },
    {
      "difficulty": "hard",
      "question": "Why is Cross-Origin Resource Sharing (CORS) critical in web development?",
      "options": [
        "It improves frontend performance.",
        "It allows secure communication between servers from different domains.",
        "It speeds up database queries.",
        "It enhances image loading from local storage."
      ],
      "answer": "It allows secure communication between servers from different domains.",
      "explanation": "CORS is a security mechanism that controls how resources on a web page can be requested from another domain, protecting users from malicious cross-origin attacks."
    },
    {
      "difficulty": "hard",
      "question": "What is the purpose of using a virtual DOM in libraries like React?",
      "options": [
        "To directly update the real DOM with every change.",
        "To enhance CSS rendering performance.",
        "To optimize and minimize real DOM updates for better performance.",
        "To store data on the server side efficiently."
      ],
      "answer": "To optimize and minimize real DOM updates for better performance.",
      "explanation": "The virtual DOM is a lightweight copy of the real DOM. React uses it to track changes and update only the parts of the real DOM that need re-rendering, improving performance."
    },
    {
      "difficulty": "hard",
      "question": "In the context of web performance optimization, what does lazy loading achieve?",
      "options": [
        "It compresses all files on the web server.",
        "It allows asynchronous database updates.",
        "It delays the loading of non-critical resources until needed.",
        "It removes unused HTML elements automatically."
      ],
      "answer": "It delays the loading of non-critical resources until needed.",
      "explanation": "Lazy loading improves page load times and efficiency by deferring the loading of non-essential elements (like images or scripts) until they are needed."
    },
    {
      "difficulty": "hard",
      "question": "Why might a developer choose to use a NoSQL database over a traditional relational database for a web application?",
      "options": [
        "Because NoSQL databases are better for complex joins.",
        "Because NoSQL databases offer better real-time performance and schema flexibility.",
        "Because NoSQL databases require no indexing.",
        "Because NoSQL databases always use SQL queries."
      ],
      "answer": "Because NoSQL databases offer better real-time performance and schema flexibility.",
      "explanation": "NoSQL databases are well-suited for handling unstructured or rapidly changing data due to their flexible schema design and horizontal scalability, ideal for many modern web apps."
    },
    {
      "difficulty": "hard",
      "question": "How does WebAssembly (Wasm) enhance web development capabilities?",
      "options": [
        "It replaces JavaScript entirely with a simpler language.",
        "It allows execution of low-level code at near-native speed in the browser.",
        "It improves the accessibility of web content.",
        "It handles CSS layout calculations more efficiently."
      ],
      "answer": "It allows execution of low-level code at near-native speed in the browser.",
      "explanation": "WebAssembly enables running code written in languages like C, C++, or Rust in the browser, delivering high performance for tasks like game engines, video editing, and data processing."
    }
  ]
   },
   {
  id: 3,
  title: "Science Concepts",
  description: "Test your understanding of foundational, intermediate, and advanced science concepts.",
  tags: ["biology", "physics", "chemistry", "general science"],
  difficulty: "easy",
  img : "/assets/quiz/science.svg",
  questions: [
    // EASY
    {
      difficulty: "easy",
      question: "What is the main function of the heart in the human body?",
      options: [
        "To digest food",
        "To pump blood throughout the body",
        "To control thoughts and emotions",
        "To filter waste from blood"
      ],
      answer: "To pump blood throughout the body",
      explanation: "The heart is a muscular organ that pumps blood throughout the body via the circulatory system."
    },
    {
      difficulty: "easy",
      question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
      options: [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      answer: "Carbon dioxide",
      explanation: "Plants take in carbon dioxide and use it along with sunlight and water to make food in a process called photosynthesis."
    },
    {
      difficulty: "easy",
      question: "What is H2O commonly known as?",
      options: [
        "Oxygen",
        "Hydrogen peroxide",
        "Salt",
        "Water"
      ],
      answer: "Water",
      explanation: "H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom."
    },
    {
      difficulty: "easy",
      question: "What is the force that pulls objects toward the Earth?",
      options: [
        "Magnetism",
        "Friction",
        "Electricity",
        "Gravity"
      ],
      answer: "Gravity",
      explanation: "Gravity is the force that attracts objects toward the center of the Earth."
    },
    {
      difficulty: "easy",
      question: "Which organ is responsible for removing waste from the blood?",
      options: [
        "Heart",
        "Liver",
        "Kidney",
        "Lungs"
      ],
      answer: "Kidney",
      explanation: "The kidneys filter waste products from the blood and excrete them in urine."
    },

    // MEDIUM
    {
      difficulty: "medium",
      question: "What is the function of mitochondria in a cell?",
      options: [
        "Protein synthesis",
        "Waste disposal",
        "Energy production",
        "Storage of genetic material"
      ],
      answer: "Energy production",
      explanation: "Mitochondria are the powerhouse of the cell, generating ATP through cellular respiration."
    },
    {
      difficulty: "medium",
      question: "Which law states that energy cannot be created or destroyed, only transformed?",
      options: [
        "Law of Conservation of Mass",
        "Newton’s Third Law",
        "Law of Conservation of Energy",
        "Hooke’s Law"
      ],
      answer: "Law of Conservation of Energy",
      explanation: "The Law of Conservation of Energy states that energy remains constant; it can be transformed but not created or destroyed."
    },
    {
      difficulty: "medium",
      question: "Which element is most abundant in the Earth's crust?",
      options: [
        "Iron",
        "Aluminum",
        "Silicon",
        "Oxygen"
      ],
      answer: "Oxygen",
      explanation: "Oxygen is the most abundant element in the Earth’s crust, making up about 46% by weight."
    },
    {
      difficulty: "medium",
      question: "What is the pH value of a neutral substance?",
      options: [
        "0",
        "7",
        "14",
        "5"
      ],
      answer: "7",
      explanation: "A substance with a pH of 7 is neutral; lower is acidic and higher is basic."
    },
    {
      difficulty: "medium",
      question: "Which part of the brain controls balance and coordination?",
      options: [
        "Cerebrum",
        "Medulla oblongata",
        "Cerebellum",
        "Hypothalamus"
      ],
      answer: "Cerebellum",
      explanation: "The cerebellum is responsible for coordinating voluntary movements, balance, and posture."
    },

    // HARD
    {
      difficulty: "hard",
      question: "Which scientist proposed the theory of general relativity?",
      options: [
        "Isaac Newton",
        "Galileo Galilei",
        "Albert Einstein",
        "Niels Bohr"
      ],
      answer: "Albert Einstein",
      explanation: "Einstein’s theory of general relativity describes gravity as a result of the curvature of spacetime caused by mass."
    },
    {
      difficulty: "hard",
      question: "What is the name of the process where DNA is copied into mRNA?",
      options: [
        "Replication",
        "Translation",
        "Transcription",
        "Mutation"
      ],
      answer: "Transcription",
      explanation: "Transcription is the process of copying a segment of DNA into messenger RNA (mRNA)."
    },
    {
      difficulty: "hard",
      question: "In quantum physics, what principle states that you cannot simultaneously know the exact position and momentum of a particle?",
      options: [
        "Pauli Exclusion Principle",
        "Uncertainty Principle",
        "Superposition Principle",
        "Wave-Particle Duality"
      ],
      answer: "Uncertainty Principle",
      explanation: "Heisenberg’s Uncertainty Principle states that the more precisely the position is known, the less precisely the momentum is known."
    },
    {
      difficulty: "hard",
      question: "Which particle in the atom has no electric charge?",
      options: [
        "Electron",
        "Proton",
        "Neutron",
        "Positron"
      ],
      answer: "Neutron",
      explanation: "Neutrons are found in the nucleus of an atom and have no electric charge."
    },
    {
      difficulty: "hard",
      question: "Which of the following phenomena is evidence for the wave nature of light?",
      options: [
        "Photoelectric effect",
        "Diffraction",
        "Refraction",
        "Absorption"
      ],
      answer: "Diffraction",
      explanation: "Diffraction is a behavior of waves where they bend around obstacles or spread through narrow openings, showing light's wave nature."
    }
  ]
},
{
    id: 4,
    title: "Math Concepts",
    description: "Challenge your knowledge across various levels of mathematics from basic arithmetic to advanced reasoning.",
    tags: ["math", "arithmetic", "algebra", "geometry", "logic"],
    img : "/assets/quiz/math.svg",
    questions: [
        {
            difficulty: "easy",
            question: "What is the value of 7 + 5?",
            options: ["10", "11", "12", "13"],
            answer: "12",
            explanation: "Adding 7 and 5 gives 12."
        },
        {
            difficulty: "easy",
            question: "What is the square of 4?",
            options: ["8", "12", "16", "20"],
            answer: "16",
            explanation: "4 squared means 4 × 4, which is 16."
        },
        {
            difficulty: "easy",
            question: "What is 100 divided by 10?",
            options: ["5", "10", "20", "25"],
            answer: "10",
            explanation: "100 ÷ 10 equals 10."
        },
        {
            difficulty: "easy",
            question: "What shape has 3 sides?",
            options: ["Circle", "Square", "Triangle", "Pentagon"],
            answer: "Triangle",
            explanation: "A triangle has three sides."
        },
        {
            difficulty: "easy",
            question: "Which number is even?",
            options: ["3", "7", "10", "13"],
            answer: "10",
            explanation: "Even numbers are divisible by 2; 10 is even."
        },

        {
            difficulty: "medium",
            question: "What is the value of 5² + 3²?",
            options: ["25", "34", "50", "64"],
            answer: "34",
            explanation: "5² = 25, 3² = 9, and 25 + 9 = 34."
        },
        {
            difficulty: "medium",
            question: "Solve: 3(x - 2) = 12. What is x?",
            options: ["2", "4", "5", "6"],
            answer: "6",
            explanation: "3(x - 2) = 12 ⇒ x - 2 = 4 ⇒ x = 6."
        },
        {
            difficulty: "medium",
            question: "What is the perimeter of a rectangle with length 8 and width 3?",
            options: ["22", "24", "26", "28"],
            answer: "22",
            explanation: "Perimeter = 2 × (8 + 3) = 22."
        },
        {
            difficulty: "medium",
            question: "If 2x + 3 = 11, what is x?",
            options: ["3", "4", "5", "6"],
            answer: "4",
            explanation: "2x = 8 ⇒ x = 4."
        },
        {
            difficulty: "medium",
            question: "What is the area of a triangle with base 6 and height 4?",
            options: ["10", "12", "14", "24"],
            answer: "12",
            explanation: "Area = ½ × base × height = ½ × 6 × 4 = 12."
        },

          {
            difficulty: "hard",
            question: "What is the derivative of x² with respect to x?",
            options: ["1", "2x", "x", "x²"],
            answer: "2x",
            explanation: "The derivative of x² with respect to x is 2x."
        },
        {
            difficulty: "hard",
            question: "If sin(θ) = 1/2, what is θ in degrees?",
            options: ["30", "45", "60", "90"],
            answer: "30",
            explanation: "sin(30°) = 1/2."
        },
        {
            difficulty: "hard",
            question: "What is the sum of the interior angles of a pentagon?",
            options: ["360", "540", "720", "900"],
            answer: "540",
            explanation: "Sum = (n - 2) × 180 = 3 × 180 = 540° for a pentagon (5 sides)."
        },
        {
            difficulty: "hard",
            question: "What is the value of log₁₀(1000)?",
            options: ["2", "3", "4", "5"],
            answer: "3",
            explanation: "10³ = 1000, so log₁₀(1000) = 3."
        },
        {
            "difficulty": "hard",
            "question": "Solve the inequality: 2x - 5 > 9",
            "options": ["x > 2", "x > 3", "x > 5", "x > 7"],
            "answer": "x > 7",
            "explanation": "2x > 14 ⇒ x > 7."
        }
    ]
},
 {
  id: 5,
  title: "Chemistry Concepts",
  description: "Test your understanding of fundamental to advanced chemistry concepts.",
  difficulty: "Mixed",
  tags: ["chemistry", "atoms", "reactions", "organic", "inorganic"],
  img : "/assets/quiz/chemistry.svg",
  questions: [
    // Easy Level (5 Questions)
    {
      difficulty: "easy",
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2", "H2O", "OH"],
      answer: "H2O",
      explanation: "Water consists of two hydrogen atoms and one oxygen atom, hence H2O."
    },
    {
      difficulty: "easy",
      question: "What is the pH value of a neutral substance?",
      options: ["0", "7", "14", "1"],
      answer: "7",
      explanation: "A pH of 7 is considered neutral, like pure water."
    },
    {
      difficulty: "easy",
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Carbon dioxide",
      explanation: "Plants absorb carbon dioxide for photosynthesis."
    },
    {
      difficulty: "easy",
      question: "Which of these is a metal?",
      options: ["Hydrogen", "Oxygen", "Iron", "Chlorine"],
      answer: "Iron",
      explanation: "Iron is a metal known for its strength and conductivity."
    },
    {
      difficulty: "easy",
      question: "What is table salt chemically known as?",
      options: ["NaCl", "KCl", "NaOH", "HCl"],
      answer: "NaCl",
      explanation: "Table salt is sodium chloride, represented as NaCl."
    },

    // Medium Level (5 Questions)
    {
      difficulty: "medium",
      question: "Which of the following is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
      answer: "Argon",
      explanation: "Argon is a noble gas in Group 18 of the periodic table."
    },
    {
      difficulty: "medium",
      question: "Which acid is found in vinegar?",
      options: ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulfuric acid"],
      answer: "Acetic acid",
      explanation: "Vinegar contains acetic acid, which gives it its sour taste and smell."
    },
    {
      difficulty: "medium",
      question: "Which part of the atom contains protons and neutrons?",
      options: ["Shell", "Orbit", "Nucleus", "Electron cloud"],
      answer: "Nucleus",
      explanation: "The nucleus is the center of the atom, containing protons and neutrons."
    },
    {
      difficulty: "medium",
      question: "Which of the following compounds is an example of a base?",
      options: ["HCl", "NaOH", "H2SO4", "CH3COOH"],
      answer: "NaOH",
      explanation: "NaOH (sodium hydroxide) is a strong base."
    },
    {
      difficulty: "medium",
      question: "Which element is liquid at room temperature?",
      options: ["Mercury", "Iron", "Gold", "Copper"],
      answer: "Mercury",
      explanation: "Mercury is the only metal that is liquid at room temperature."
    },

    // Hard Level (5 Questions)
    {
      difficulty: "hard",
      question: "What is the molecular geometry of methane (CH₄)?",
      options: ["Tetrahedral", "Trigonal planar", "Bent", "Linear"],
      answer: "Tetrahedral",
      explanation: "Methane has a tetrahedral geometry due to sp³ hybridization."
    },
    {
      difficulty: "hard",
      question: "Which orbital has a spherical shape?",
      options: ["s orbital", "p orbital", "d orbital", "f orbital"],
      answer: "s orbital",
      explanation: "The s orbital is spherical in shape."
    },
    {
      difficulty: "hard",
      question: "Which hybridization occurs in ethene (C2H4)?",
      options: ["sp", "sp2", "sp3", "dsp2"],
      answer: "sp2",
      explanation: "Ethene has sp² hybridization with a double bond between the carbons."
    },
    {
      difficulty: "hard",
      question: "Which of the following compounds exhibits hydrogen bonding?",
      options: ["CH4", "NH3", "CO2", "C2H6"],
      answer: "NH3",
      explanation: "Ammonia (NH3) shows hydrogen bonding due to nitrogen's high electronegativity."
    },
    {
      difficulty: "hard",
      question: "What is the oxidation state of chromium in Cr2O7^2-?",
      options: ["+2", "+3", "+6", "+7"],
      answer: "+6",
      explanation: "Each oxygen is -2, and the total charge is -2, so each Cr must be +6."
    }
  ]
}


];
