const QUIZZES_URL = 'https://wbdv-sp21-02-yichengjiang-node.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
export default {
    findAllQuizzes, findQuizById
}