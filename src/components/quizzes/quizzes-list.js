import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service'

const QuizzesList = () => {
    const {courseId} = useParams();
    // store local state variable
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return (
        <div className="container">
            <h2>Quizzes</h2>
            <ul className='list-group'>
                {
                    quizzes.map((quiz) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                    <div className="btn btn-primary float-right">
                                        Start
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList