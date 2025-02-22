import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const TaskCard = ({task,refetch}) => {
    return (
        <div className='border p-2 rounded-sm flex justify-between items-start'>
            <div>
            <h1>{task.title}</h1>
            </div>
            <div>
                <button className='text-red-500'><RiDeleteBin6Fill /></button>
            </div>
        </div>
    );
};

export default TaskCard;