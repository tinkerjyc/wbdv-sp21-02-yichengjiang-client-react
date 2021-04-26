const QUIZZES_URL = 'https://wbdv-sp21-02-yichengjiang-node.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz
}