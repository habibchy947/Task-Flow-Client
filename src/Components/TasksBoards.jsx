import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import CreateTask from './CreateTask';
import toast from 'react-hot-toast';
import Column from './Column';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const TasksBoards = () => {
  const { user } = useContext(AuthContext)
  const categories = ['To-Do', 'In-Progress', 'Done']
  // get all tasks
  const { data: tasks = [], refetch, isLoading } = useQuery({
    queryKey: ['tasks', user],
    queryFn: async () => {
      const { data } = await axios.get(`https://task-flow-server-six.vercel.app/tasks/${user?.email}`)
      return data
    },
    enabled: true
  })


  // add task
  const addTask = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    if (title.length > 50) return toast.error('Title must be less then or equal to 50 caharacter')
    if (description.length > 200) return toast.error('Description must be less then or equal to 200 caharacter')

    const newTask = {
      email: user?.email,
      title: title,
      description: description,
      createdAt: new Date(),
      category: 'To-Do'
    }
    // console.log(newTask)

    await axios.post('https://task-flow-server-six.vercel.app/tasks', newTask)
      .then(() => {
        // console.log(res.data)
        refetch()
        toast.success('Task Created')
        e.target.reset()
      })

  }
  return (
    
      <div className='px-10'>
          <CreateTask addTask={addTask}></CreateTask>
          <DndProvider backend={HTML5Backend}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            {
              categories.map((category, index) => <Column isLoading={isLoading} refetch={refetch} key={index} category={category} tasks={tasks}></Column>)
            }
          </div>
          </DndProvider>
      </div>
  );
};

export default TasksBoards;