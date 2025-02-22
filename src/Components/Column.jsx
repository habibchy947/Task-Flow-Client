import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import axios from 'axios';
import toast from 'react-hot-toast';

const Column = ({category, tasks, refetch, isLoading}) => {
    const fTasks = tasks.filter((taskF)=> taskF.category === category)

     const [{ isOver }, drop] = useDrop(() => ({
            accept: "task",
            drop:  (item) => addItemToSection(item.id),
            collect: (monitor) => ({
              isOver: !!monitor.isOver()
            })
          }))
        
          const addItemToSection = async (id) => {
              const {data} = await axios.put(`http://localhost:5000/dragTask/${id}`, {category})
              refetch()

              toast.success(`Task is ${category}` )
              console.log(data)
          }
    return (
        <div ref={drop} className={`border rounded-md shadow-md ${isOver ? 'bg-slate-100 dark:bg-slate-500' : ''}`}>
            <h2 className='p-3 bg-slate-200 dark:bg-neutral text-xl font-bold'>{category}</h2>
            <div className='space-y-2 mt-2 p-2 min-h-20'>
                {
                    tasks.length ? (
                        fTasks.map((task,index)=> <TaskCard isLoading={isLoading} key={index} task={task} refetch={refetch}></TaskCard>)
                    ) : <p>No Task available</p>
                }
            </div>
        </div>
    );
};

export default Column;