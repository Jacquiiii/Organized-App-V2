// External imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Creates API queries that can be used to fetch and insert data from/to the /tasks endpoints
export const tasksAPI = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:54321/' }),
  endpoints: (builder) => ({
    getTasksByUserId: builder.query({
      query: (userId) => ({
        url: `tasks/${userId}`,
        method: 'GET',
      }),
    }),
    insertTask: builder.mutation({
      query: (task) => ({
        url: 'tasks',
        method: 'POST',
        body: task,
      }),
    }),
  }),
})

// Exports queries for use in other components
export const { useGetTasksByUserIdQuery, useInsertTaskMutation } = tasksAPI
