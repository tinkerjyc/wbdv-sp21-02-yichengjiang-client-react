import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState([])
    const [questions, setQuestions] = useState([])
    const [attempts, setAttempts] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((res) => {
                setQuestions(res)
            })
        quizService.findQuizById(quizId).then((res) => setQuiz(res))
        quizService.findAttemptsByQuizId(quizId).then((attempts) => {
            setAttempts(attempts)
        })
    }, [])

    return(
        <div>
            <h2>{quiz.title}</h2>
            <ul className="list-group">
                {
                    questions.map(question =>
                                      <li key={question._id} className={"list-group-item"}>
                                          <Question question={question}/>
                                      </li>
                    )
                }
            </ul>

            <br/>
            <button
                className={"btn btn-success"}
                onClick={() => {
                    quizService.submitQuiz(quizId, questions)
                    quizService.findAttemptsByQuizId(quizId).then((attempts) => {
                        setAttempts(attempts)
                    })
                }}>
                Submit
            </button>

            <br/>
            <div>
                <h2>Please refresh the page to see attempt score</h2>
                <ul className="list-group">
                    {
                        attempts.map((attempt) => {
                            return(
                                <li key={attempt._id} className="list-group-item">
                                    Attempt Score: {attempt.score}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Quiz;