import express from "express";
const router = express.Router();
actualanswers: [] = [
  {
    id: "1",
    answer: [2],
  },
  {
    id: "2",
    answer: [1],
  },
  {
    id: "3",
    answer: [0],
  },
  {
    id: "4",
    answer: [0],
  },
  {
    id: "5",
    answer: [1],
  },
  {
    id: "6",
    answer: [0],
  },
  {
    id: "7",
    answer: [2],
  },
  {
    id: "8",
    answer: [1],
  },
  {
    id: "9",
    answer: [1],
  },
  {
    id: "10",
    answer: [1],
  },
  {
    id: "11",
    answer: [0, 3],
  },

  {
    id: "12",
    answer: [0, 2, 4],
  },

  {
    id: "13",
    answer: [0, 2, 4],
  },

  {
    id: "14",
    answer: [0, 3],
  },

  {
    id: "15",
    answer: [0, 1, 4],
  },
];
let selectedAnswers = [];

router.get("/", function (request, response) {
  response.send(selectedAnswers);
});

router.post("/", function (request, response) {
  const bodydata = request.body;
  let totalScore = 0;
  const results = [];

  answers.forEach((question) => {
    const userAnswer = bodydata.find((answer) => answer.id === question.id);
    const userSelectedOptions = userAnswer ? userAnswer.Ans : [];
    const correctOptionIndices = question.correctOptions.map((correctOption) =>
      question.choices.indexOf(correctOption).toString()
    );

    const isCorrect =
      JSON.stringify(userSelectedOptions) ===
      JSON.stringify(question.correctOptions);
    if (isCorrect) {
      totalScore++;
    }

    results.push({
      id: question.id,
      question: question.question,
      userSelectedOptions: userSelectedOptions,
      correctOptions: correctOptionIndices,
      choices: question.choices,
      response: isCorrect ? "correct" : "wrong",
    });
  });

  const totalQuestions = answers.length;
  const scorePercentage = (totalScore / totalQuestions) * 100;

  selectedAnswers = bodydata;
  response.send({ totalScore, scorePercentage, results });
});

export default router;
