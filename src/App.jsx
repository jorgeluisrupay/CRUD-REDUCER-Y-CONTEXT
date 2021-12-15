import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Heading } from './components/Heading'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import GlobalProvider from './context/GlobalContext'



export const App = () => {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Heading />} >
          <Route index element = {<TaskList />} />
          <Route path="add" element = {<TaskForm />} />
          <Route path="/edit/:id" element = {<TaskForm />} />
        </Route>
      </Routes>
      </GlobalProvider>

  )
}
