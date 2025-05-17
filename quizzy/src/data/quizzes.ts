export const quizzes = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Test your understanding of fundamental JavaScript concepts.",
    difficulty: "Beginner",
    tags: ["javascript", "programming", "basics"],
    questions: [
      {
        id: 101,
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["object", "null", "undefined", "function"],
        correctAnswer: "object"
      },
      {
        id: 102,
        question: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        correctAnswer: "const"
      },
      {
        id: 103,
        question: "What will `NaN === NaN` return?",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: "false"
      }
    ]
  },
  {
    id: 2,
    title: "HTML & CSS Fundamentals",
    description: "Check your knowledge of web design using HTML and CSS.",
    difficulty: "Beginner",
    tags: ["html", "css", "frontend"],
    questions: [
      {
        id: 201,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>"
      },
      {
        id: 202,
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correctAnswer: "font-size"
      },
      {
        id: 203,
        question: "How do you select an element with id 'header' in CSS?",
        options: ["#header", ".header", "header", "*header"],
        correctAnswer: "#header"
      }
    ]
  },
  {
    id: 3,
    title: "React JS Concepts",
    description: "Challenge your understanding of core React concepts and hooks.",
    difficulty: "Intermediate",
    tags: ["react", "hooks", "javascript", "frontend"],
    questions: [
      {
        id: 301,
        question: "Which hook is used to manage state in a functional component?",
        options: ["useRef", "useEffect", "useState", "useContext"],
        correctAnswer: "useState"
      },
      {
        id: 302,
        question: "What is the default behavior of `useEffect`?",
        options: [
          "Runs after every render",
          "Runs only on mount",
          "Runs before render",
          "Runs only when state updates"
        ],
        correctAnswer: "Runs after every render"
      },
      {
        id: 303,
        question: "Keys in React lists help with what?",
        options: [
          "Styling",
          "Improving performance",
          "Tracking element identity",
          "None of the above"
        ],
        correctAnswer: "Tracking element identity"
      }
    ]
  },
  {
    id: 4,
    title: "Node.js & Express",
    description: "Test your backend knowledge using Node.js and Express framework.",
    difficulty: "Intermediate",
    tags: ["node", "express", "backend", "javascript"],
    questions: [
      {
        id: 401,
        question: "Which method is used to create a server in Node.js?",
        options: ["http.listen()", "http.createServer()", "server.start()", "express.init()"],
        correctAnswer: "http.createServer()"
      },
      {
        id: 402,
        question: "Which middleware is used to parse JSON bodies in Express?",
        options: ["bodyParser.json()", "express.json()", "jsonParser()", "express.body()"],
        correctAnswer: "express.json()"
      },
      {
        id: 403,
        question: "What does `req.params` contain in Express?",
        options: [
          "Query string parameters",
          "Form data",
          "URL route parameters",
          "Header information"
        ],
        correctAnswer: "URL route parameters"
      }
    ]
  }
];
