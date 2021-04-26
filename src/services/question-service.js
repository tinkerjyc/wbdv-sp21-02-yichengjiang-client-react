const QUIZZES_URL = 'https://wbdv-sp21-02-yichengjiang-node.herokuapp.com/api/quizzes';

const QUESTIONS_URL = 'https://wbdv-sp21-02-yichengjiang-node.herokuapp.com/api/questions'

export const findAllQuestions = () => {
    return fetch(QUESTIONS_URL)
        .then(response => response.json())
}

const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz,
    findAllQuestions
}