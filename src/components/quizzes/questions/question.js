import React, {useState} from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, submit}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correct, setCorrect] = useState(false)

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    submit={submit}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    submit={submit}
                />
            }
        </div>
    )
}

export default Question