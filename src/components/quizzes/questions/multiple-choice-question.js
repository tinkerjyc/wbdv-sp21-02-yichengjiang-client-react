import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, submit}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    // const [submit, setSubmit] = useState(false)
    // // update status after clicking Grade button to show the result similar to true-false
    // const gradeYourAnswer = () => {
    //     setSubmit(true)
    // }
    return (
        <div>
            <h5>
                {question.question}
                {/*show check box if correct*/}
                {
                    question.correct === yourAnswer
                    && submit
                    && <i className="fas fa-check float-right color-green"/>

                }
                {
                    question.correct !== yourAnswer
                    && submit
                    && <i className="fas fa-times float-right color-red"/>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item
                            ${(yourAnswer !== question.correct) && (choice === yourAnswer) && submit
                              ? 'list-group-item-danger' : ''}
                            ${(choice === question.correct) && submit ? 'list-group-item-success'
                                                                      : ''}`}>
                                <label>
                                    <input
                                        onClick={() => {
                                            question.answer = choice
                                            console.log(question.answer)
                                            setYourAnswer(choice)
                                        }}
                                        type="radio"
                                        name={question._id}
                                        // only one attempt for grading
                                        disabled={submit}/>
                                    {choice}
                                    <>
                                        {
                                            (question.correct === choice)
                                            && submit
                                            && <i className="fas fa-check float-right color-green"/>
                                        }
                                        {
                                            (question.correct !== choice)
                                            && submit
                                            && <i className="fas fa-times float-right color-red"/>
                                        }
                                    </>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <h6>
                Your answer: {yourAnswer}
            </h6>
            {/*<div className="btn btn-success"*/}
            {/*     onClick={gradeYourAnswer}>*/}
            {/*    Grade*/}
            {/*</div>*/}
        </div>
    )
}

export default MultipleChoiceQuestion