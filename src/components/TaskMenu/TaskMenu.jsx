// External imports
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'

// Context
import { ThemeContext } from '../../providers/ThemeProvider'

// Store & slices
import { useInsertTaskMutation, useGetTasksByUserIdQuery } from '../../store/slices/tasksApiSlice'

// Styles
import {
  TaskWrapper,
  CreateWrapper,
  TaskForm,
  ViewWrapper,
  Task
} from './styles'

const TaskMenu = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const user_id = useSelector((state) => state.login.userId)

  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const [insertTask, { isLoading, error }] = useInsertTaskMutation()
  const { data, refetch } = useGetTasksByUserIdQuery(user_id)

  const { theme } = useContext(ThemeContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const task = { description, category, user_id }
      await insertTask(task)
      setDescription('')
      setCategory('')
      refetch()
    } catch (err) {
      console.error('Failed to insert task', err)
    }
  }

  return (
    <>
      {isLoggedIn && (
        <TaskWrapper theme={theme}>
          <CreateWrapper theme={theme}>
            <TaskForm onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Task"
                id="description"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />

              <select
                id="category"
                name="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="activity">Activity</option>
                <option value="buy">Buy</option>
                <option value="read">Read</option>
                <option value="watch">Watch</option>
              </select>

              <button type="submit">{isLoading ? 'Submitting...' : 'Submit'}</button>
              {error && <p>Error, please try again.</p>}
            </TaskForm>
          </CreateWrapper>
          {data && (
            <ViewWrapper theme={theme}>
              {data.userTasks.map(task => (
                <Task key={task.id}>
                  {task.description} ({task.category})
                </Task>
              ))}
            </ViewWrapper>
          )}
        </TaskWrapper>
      )}
    </>
  )
}

export default TaskMenu
