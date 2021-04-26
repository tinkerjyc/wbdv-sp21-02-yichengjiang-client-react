import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import questionService from '../../services/question-service'
import Question from "./questions/question";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [scored, setScored] = useState(false);
    const [submit, setSubmit] = useState(false)

    const loadAttempts = () => {
        quizService.findAttemptsForQuiz(quizId)
            .then((attempts) => {
                      // console.log(JSON.stringify(attempts))
                      setAttempts(attempts)
                  }
            )
    }

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
                // console.log(JSON.stringify(questions))
            })
    }, [quizId])
    return (
        <div className="container">
            <h3>Quiz {quizId}</h3>
            <ul>
                {
                    // iterate all questions, similar as widgets to wrap delicate Questions
                    questions.map((question) => {
                        return (
                            <>
                                <Question
                                    question={question}
                                    submit={submit}
                                />
                                <br/>
                            </>
                        )
                    })
                }
                <div className="row">
                    <div
                        className="col-4 mr-auto btn btn-primary"
                        onClick={() => {
                            console.log(JSON.stringify(questions.answer))
                            quizService.submitQuiz(quizId, questions)
                            setScored(true)
                            setSubmit(true)
                            loadAttempts()
                        }}>
                        Submit
                    </div>
                    <div
                        className="col-4 mr-auto btn btn-secondary"
                        onClick={() => {
                            setSubmit(false)
                        }}>
                        Retry
                    </div>
                </div>
                <div>
                    {
                        scored &&
                        <>
                            <br/>
                            <h5>List Your Attempts:</h5>
                            <ol className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-8">
                                            Submitted At
                                        </div>
                                        <div className="col-4">
                                            Your Score
                                        </div>
                                    </div>
                                </li>
                                {
                                    attempts.map((attempt) => {
                                        return (
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-8">
                                                        {attempt.created}
                                                    </div>
                                                    <div className="col-4">
                                                        {attempt.score}
                                                    </div>
                                                </div>

                                            </li>
                                        )

                                    })
                                }
                            </ol>
                        </>
                    }
                </div>
            </ul>
        </div>
    )
}
export default Quiz