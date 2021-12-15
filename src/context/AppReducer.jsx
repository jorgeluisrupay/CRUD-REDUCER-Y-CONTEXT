
export const AppReducer = (state, {type, payload}) => {


    switch (type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, payload],
            }
        case 'DELETE_TASK': 
            return{
                tasks: state.tasks.filter( task => task.id !== payload),
            }
        case 'UPDATE_TASK':
            console.log(payload); 
            const updateTask = payload;
            const updateTasks = state.tasks.map((task) => {
                if (task.id === updateTask.id) {
                    task.title = updateTask.title;
                    task.description = updateTask.description;
                    return task;
                }
                return task;
            });
            return{
                tasks: updateTasks,

            }
        case 'TOGGLE_TASK_DONE': 
          
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === payload) {
                return { ...task, done: !task.done };
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
            };
            

        default:
            return state; 
    }

    
}
