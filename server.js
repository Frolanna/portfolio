const express = require("express");
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get(/^\/[A-Za-z]*$/, function (req, res) {
    res.sendfile('index.html', { root: __dirname + "/dist" });
});

app.get('/test/getTestQuestions', function (req, res) {
    try {
        let questions = require('./test/Questions.json');
        res.send(questions);
    }
    catch (ex) {
        res.status(500).send(ex);
    }
});

app.post('/test/getTestResult', function (req, res) {
    try {
        let answers = req.body;
        let correctAnswers = require('./test/Answers.json').correctAnswers;
        console.log(correctAnswers);
        let count = 0;

        answers.forEach(answer => {
            let correctAnswer = correctAnswers.find((a) => a.questionId === answer.questionId ? true : false);
            if (correctAnswer) {
                if (correctAnswer.answerId === answer.answerId) {
                    count++;
                }
            }
        });

        res.send({ correctAnswersCount: count, commonAnswersCount: answers.length });
    }
    catch (ex) {
        res.status(500).send(ex);
    }
});

app.listen(3000, () => console.log("App listening on port 3000!"));