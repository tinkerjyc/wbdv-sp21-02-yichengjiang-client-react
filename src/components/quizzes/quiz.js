import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState([])
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((res) => {
                setQuestions(res)
            })
        quizService.findQuizById(quizId).then((res) => setQuiz(res))
    },[])

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
        </div>
    );
}

export default Quiz;