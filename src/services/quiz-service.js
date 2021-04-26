const QUIZZES_URL = 'https://wbdv-sp21-02-yichengjiang-node.herokuapp.com/api/quizzes';

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

export const findQuizzesForCourse = (courseId) =>
    fetch(`${QUIZZES_URL}/courses/${courseId}/quizzes`)
        // stream the body of the response
        .then(response => response.json())

export const findQuizzesById = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())

export const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

export const findAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())


export default {
    findAllQuizzes,
    findQuizzesForCourse,
    findQuizzesById,
    submitQuiz,
    findAttemptsForQuiz
}