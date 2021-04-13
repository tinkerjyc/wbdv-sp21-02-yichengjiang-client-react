import React, {useState} from "react";
import {Link} from "react-router-dom";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [graded, setGraded] = useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    graded &&
                    question.correct === yourAnswer &&
                    <i className="fas fa-check float-right correct"></i>
                }
                {
                    graded &&
                    question.correct !== yourAnswer &&
                    <i className="fas fa-times float-right wrong"></i>
                }
            </h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li key={choice}
                                className={`list-group-item
                                ${graded && question.correct === choice ? "list-group-item-success"
                                                                        : ""}
                                ${graded && question.correct !== choice && choice === yourAnswer
                                  ? "list-group-item-danger" : ""}`}>
                                <label>
                                    <input
                                        onClick={() => {
                                            setYourAnswer(choice)
                                        }}
                                        type="radio"
                                        disabled={graded}
                                        name={question._id}/> {choice}
                                </label>
                                {
                                    graded && question.correct === choice &&
                                    <i className={"fas fa-check float-right"}></i>
                                }
                                {
                                    graded && question.correct !== choice && yourAnswer === choice
                                    &&
                                    <i className={"fas fa-times float-right"}></i>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            {/*<p>{question.correct}</p>*/}
            <button
                onClick={() => setGraded(true)}
                className={"btn btn-success"}>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion