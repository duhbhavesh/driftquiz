require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');
const { PopulateQuizzes } = require('./models/quiz.model');
const { handleError } = require('./middlewares/handleError.middleware');
const {
   handleRouteNotFound,
} = require('./middlewares/handleRouteNotFound.middleware');
const authRouter = require('./routes/auth.router');
const usersRouter = require('./routes/user.router');
const quizRouter = require('./routes/quiz.router');
const quizReportRouter = require('./routes/quizReport.router');
const leaderBoardRouter = require('./routes/leaderBoard.router');

const app = express();
app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();
// PopulateQuizzes()

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftquiz - API' });
});

app.use('/api', authRouter);
app.use('/api', usersRouter);

app.use('/api', quizRouter);
app.use('/api', quizReportRouter);
app.use('/api', leaderBoardRouter);

app.use(handleRouteNotFound);
app.use(handleError);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`SERVER Listening on PORT ${PORT}`);
});
