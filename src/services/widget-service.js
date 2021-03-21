const WIDGETS_URL = "https://wbdv-sp21-02-yichengjiang-serv.herokuapp.com/api";

export const createWidget = (tid, widget) =>
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`)
        .then(response => response.json())

// export const findTopic = (topicId) =>
//     fetch(`${TOPICS_URL}/${topicId}`)
//         .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: 'DELETE'
    }).then(response => response.json());

const api = {
    createWidget,
    findWidgetsForTopic,
    // findAllWidgets,
    // findWidgetById,
    updateWidget,
    deleteWidget
};

export default api;