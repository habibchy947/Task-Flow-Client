import React from 'react';
import TaskCard from './TaskCard';

const Column = ({category, tasks, refetch}) => {

    const fTasks = tasks.filter((taskF)=> taskF.category === category)
    return (
        <div className='border rounded-md p-3 shadow-md'>
            <h2>{category}</h2>
            <div className='space-y-2 mt-2'>
                {
                    tasks.length ? (
                        fTasks.map((task,index)=> <TaskCard key={index} task={task} refetch={refetch}></TaskCard>)
                    ) : <p>No Task available</p>
                }
            </div>
        </div>
    );
};

export default Column;