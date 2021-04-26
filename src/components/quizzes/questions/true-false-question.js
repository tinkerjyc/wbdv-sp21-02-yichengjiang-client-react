import React, {useState} from "react";

const TrueFalseQuestion = ({question, submit}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    // const [submit, setSubmit] = useState(false)
    // // update status after clicking Grade button to show the result
    // const gradeYourAnswer = () => {
    //     setSubmit(true)
    // }
    return (
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && (yourAnswer !== '') && submit &&
                    <i className="fas fa-check float-right color-green"/>
                }
                {
                    (question.correct !== yourAnswer) && (yourAnswer !== '') && submit &&
                    <i className="fas fa-times float-right color-red"/>
                }
            </h5>
            <ul className="list-group">
                <li className={`list-group-item
                        ${(yourAnswer !== question.correct) && (yourAnswer === 'true') && submit
                          ? 'list-group-item-danger' : ''}
                        ${(question.correct === 'true') && submit ? 'list-group-item-success'
                                                                  : ''}`}>
                    <label>
                        <input
                            onClick={() => {
                                question.answer = "true"
                                console.log(question.answer)
                                setYourAnswer('true')
                            }}
                            // onClick={() => clickable('true')}
                            type="radio"
                            name={question._id}
                            // one attempt
                            disabled={submit}
                        /> TRUE
                        {/*valiadate if yourAnswer is correct*/}
                        {
                            (question.correct === 'true') && submit
                            && <i className="fas fa-check float-right color-green"/>
                        }
                        {
                            (question.correct !== yourAnswer)
                            && (yourAnswer === 'true')
                            && submit
                            && <i className="fas fa-times float-right color-red"/>
                        }
                    </label>
                </li>
                <li className={`list-group-item
                        ${(yourAnswer !== question.correct) && (yourAnswer === 'false') && submit
                          ? 'list-group-item-danger' : ''}
                        ${(question.correct === 'false') && submit ? 'list-group-item-success'
                                                                   : ''}`}>
                    <label>
                        <input
                            onClick={() => {
                                question.answer = "false"
                                console.log(question.answer)
                                setYourAnswer('false')
                            }}
                            type="radio"
                            name={question._id}
                            disabled={submit}
                        /> FALSE
                        {/*valiadate if yourAnswer is correct*/}
                        {
                            (question.correct === 'false')
                            && submit
                            && <i className="fas fa-check float-right color-green"/>
                        }
                        {
                            (question.correct !== yourAnswer)
                            && (yourAnswer === 'false')
                            && submit
                            && <i className="fas fa-times float-right color-red"/>
                        }
                    </label>
                </li>
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

export default TrueFalseQuestion