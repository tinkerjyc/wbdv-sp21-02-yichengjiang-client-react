import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setAnswer] = useState(null)
    const [graded, setGraded] = useState(false)
    return(
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
                <li className={`list-group-item
                    ${graded && question.correct === "true" ? "list-group-item-success" : ""}
                    ${graded && question.correct !== "true" && "true" === yourAnswer ? "list-group-item-danger" : ""}`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() =>{
                                setAnswer("true")
                                question.answer = "true"
                            }}
                            disabled={graded}
                            name={question._id}/>
                        True
                    </label>
                    {
                        graded && question.correct === "true" &&
                        <i className={"fas fa-check float-right"}></i>
                    }
                    {
                        graded && question.correct !== "true" && yourAnswer === "true" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>

                <li className={`list-group-item
                    ${graded && question.correct === "false" ? "list-group-item-success" : ""}
                    ${graded && question.correct !== "false" && "false" === yourAnswer ? "list-group-item-danger" : ""}`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() => {
                                setAnswer("false")
                                question.answer = "false"
                            }}
                            disabled={graded}
                            name={question._id}/>
                        False
                    </label>
                    {
                        graded && question.correct === "false" &&
                        <i className={"fas fa-check float-right"}></i>
                    }
                    {
                        graded && question.correct !== "false" && yourAnswer === "false" &&
                        <i className={"fas fa-times float-right"}></i>
                    }
                </li>
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
        </div>
    )
}

export default TrueFalseQuestion