import axios from 'axios';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const TaskCard = ({task,refetch}) => {
    const modalRef = useRef(null)
    const handleDeleteOrder = async (id) => {
        console.log(id)
        try {
            const { data } = await axios.delete(`http://localhost:5000/tasks/${id}`)
            refetch()
            console.log(data)
            toast.success('Task deleted successfully')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }
    const deleteConfirmation = (id) => {
        console.log(id)
        toast(t => (
            <div className='flex gap-3 items-center'>
                <div>
                    <p>Are you <b>sure?</b></p>
                </div>
                <div className='flex gap-2'>
                    <button
                        className='bg-red-400 text-white px-3 py-1 rounded-md'
                        onClick={() => {
                            toast.dismiss(t.id)
                            handleDeleteOrder(id)
                        }}
                    >Yes
                    </button>
                    <button className='bg-green-400 text-white px-3 py-1 rounded-md'
                    onClick={()=>toast.dismiss(t.id)}
                    >Cancel</button>
                </div>
            </div>
        ))
    }

    
    return (
        <div className='border p-2 rounded-sm flex justify-between items-start'>
            <div>
            <h1>{task.title}</h1>
            </div>
            <div className='flex gap-3'>
                <button onClick={()=>handleUpdateFood(task._id)} className='text-pink-500'><FaRegEdit /></button>
                <button onClick={()=>deleteConfirmation(task._id)} className='text-red-500'><RiDeleteBin6Fill /></button>
            </div>
        </div>
    );
};

export default TaskCard;