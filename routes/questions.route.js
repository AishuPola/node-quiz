import express from "express";
import { v4 as uuidv4 } from "uuid"; // Named Import
const router = express.Router();
questions = [
  {
    id: "1",
    question: "What is the capital of France?",
    type: "mcq",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: "2",
    question: "What is the largest planet in our solar system?",
    type: "mcq",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
  },
  {
    id: "3",
    question: "What is the chemical symbol for gold?",
    type: "mcq",
    choices: ["Au", "Ag", "Fe", "Pb"],
  },
  {
    id: "4",
    question: "Who wrote 'To Kill a Mockingbird'?",
    type: "mcq",
    choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
  },
  {
    id: "5",
    question: "What is the smallest unit of life?",
    type: "mcq",
    choices: ["Atom", "Cell", "Molecule", "Organ"],
  },
  {
    id: "6",
    question: "Which element has the atomic number 1?",
    type: "mcq",
    choices: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
  },
  {
    id: "7",
    question: "What is the hardest natural substance on Earth?",
    type: "mcq",
    choices: ["Gold", "Iron", "Diamond", "Platinum"],
  },
  {
    id: "8",
    question: "What is the main ingredient in guacamole?",
    type: "mcq",
    choices: ["Tomato", "Avocado", "Pepper", "Onion"],
  },
  {
    id: "9",
    question: "Who painted the Mona Lisa?",
    type: "mcq",
    choices: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
      "Pablo Picasso",
    ],
  },
  {
    id: "10",
    question: "What is the longest river in the world?",
    type: "mcq",
    choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  },
  {
    id: "11",
    question: "Which of the following are prime numbers?",
    type: "mca",
    choices: ["2", "4", "6", "7", "9"],
  },

  {
    id: "12",
    question: "Which of these countries are located in Europe?",
    type: "mca",
    choices: ["France", "Brazil", "Italy", "Canada", "Germany"],
  },

  {
    id: "13",
    question: "Which elements are noble gases?",
    type: "mca",
    choices: ["Helium", "Oxygen", "Neon", "Hydrogen", "Argon"],
  },

  {
    id: "14",
    question: "Which of these animals are mammals?",
    type: "mca",
    choices: ["Elephant", "Shark", "Crocodile", "Dolphin", "Penguin"],
  },

  {
    id: "15",
    question: "Which of the following are programming languages?",
    type: "mca",
    choices: ["Python", "Java", "HTML", "CSS", "Ruby"],
  },
];

router.get("/", function (request, response) {
  response.send(questions);
});

// /movies/99 |: makes the id variable
router.get("/:id", function (request, response) {
  const questionid = request.params.id;
  const question = question.find((m) => m.id == questionid);
  if (!question) {
    response.status(404).send(" Error 404 ! Movie Not found");
  } else {
    response.send(question);
  }
});

export default router;
