import React, {createContext, useReducer, useState} from 'react'
import { AppReducer } from './AppReducer';
import {v4} from 'uuid'

const initialState = {
    tasks: [
        {
            id: '1',
            title: 'title one',
            description: 'description one',
            done: false,
        },
        {
            id: '2',
            title: 'title two',
            description: 'description two',
            done: true,
        },
        {
            id: '3',
            title: 'title three',
            description: 'description three',
            done: true,
        }
    ]
}

export const GlobalContext =  createContext(initialState);

const GlobalProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTask = (task) => {
        //console.log('Add tasks', task);
        dispatch({type: 'ADD_TASK', payload: {
            ...task,
            id: v4(),
            done: false
        }})
    }

    const deleteTask = (id) => {
        dispatch({type: 'DELETE_TASK',payload: id})
    }

    const updateTask = (task) => {
        dispatch({type: 'UPDATE_TASK',payload: task})
    }

    const toggleTaskDone = (id) => {
        dispatch({type: 'TOGGLE_TASK_DONE',payload: id})
    }
   
    return (
    <GlobalContext.Provider value={{
        ...state, 
        addTask,
        deleteTask,
        updateTask,
        toggleTaskDone,
    }}>
        {children}
    </GlobalContext.Provider>)
}
export default GlobalProvider