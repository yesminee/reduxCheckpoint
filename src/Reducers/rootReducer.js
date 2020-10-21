const initialState = {
    tasksList: [
        {
            id: 1,
            description: "Wake-up early",
            isDone: false,
        },
        {
            id: 2,
            description: "Take the bus",
            isDone: false,
        }, {
            id: 3,
            description: "Do homework",
            isDone: false,
        },
        {
            id: 4,
            description: "Write an email to Mr Chris",
            isDone: false,
        },
    ],
};
function rootReducer(state = initialState, { type, payload }) {
                switch (type) {
                    case "ADD_TASK":
                        return {
                            ...state,
                            tasksList: [...state.tasksList, payload],
                        };
                    case "TOGGLE_TASK":
                        return {
                            ...state,
                            tasksList: state.tasksList.map((task) =>
                                task.id === payload ? { ...task, isDone: !task.isDone } : task
                            ),
                        };
                    case "DELETE_TASK":
                        return {
                            ...state,
                            tasksList: state.tasksList.filter((task) => task.id !== payload),
                        };
                    case "EDIT_TASK":
                        return {
                            ...state,
                            tasksList: state.tasksList.map((task) =>
                                task.description === payload.description
                                    ? { ...task, description: payload.newDescription }
                                    : task
                            ),
                        };
                    default:
                        return state;
                }
            }

            export default rootReducer;
